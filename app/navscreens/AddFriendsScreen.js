import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { FireDB } from '../FirebaseApp';
import Base64 from 'base-64';
import {StyleSheet,Text,View,ListView,Button,TextInput} from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between'
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        //justifyContent: 'space-around',
        backgroundColor:'white'
    }
});

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class AddFriendsScreen extends Component {

    constructor(props,context){
        super(props,context);
        this.state = {
            users: [],
            userNode: {}
        };
        this.renderRow = this.renderRow.bind(this);
    }

    addFriend(userID){
        return FireDB.ref(`friendRequests/${userID}/${this.props.userKey}`).set(this.props.userInfo);
    }

    async search(text){
        if(text == ""){
            return this.setState({users: []});
        }
        try{
            const body = {
                "query": {
                    "bool" : {
                        "must" : {
                            "query_string" : {
                                "query" : `${text}*`
                            }
                        }
                    }
                }
            };

            const response = await fetch('https://smoke-8808408.us-east-1.bonsaisearch.net/firebase/_search', {
                method: 'post',
                headers: {
                    'Authorization': 'Basic '+Base64.encode('xl3kjbor:dkkw3rr5t2eiy7t3')
                },
                body: JSON.stringify(body)
            });
            const users = JSON.parse(response._bodyInit).hits.hits;
            this.setState({users: users});
        }
        catch(error){
            console.log("error",error);
        }
    }

    renderRow(rowData, sectionID){
        return (


          <ListItem
            key={sectionID}
            title={rowData._source.screenName}
            rightIcon={{name: 'account-plus', type:'material-community', color:'#2196F3'}}
            onPress={function(){
                if(this.props.friendRequests[rowData._id]){
                    const friendRef = FireDB.ref(`users/${rowData._id}`);
                    friendRef.once('value',function(friendInfo){
                        FireDB.ref(`friends/${rowData._id}/${this.props.userKey}`).set(this.props.userInfo);
                        FireDB.ref(`friends/${this.props.userKey}/${rowData._id}`).set(friendInfo.val());
                        FireDB.ref(`friendRequests/${this.props.userKey}/${rowData._id}`).set(null);
                    }.bind(this));
                }
                else{
                     //TODO: set button on loading state
                    this.addFriend(rowData._id).then(function(response){
                        //TODO: show checkmark instead of button
                    }.bind(this),
                    function(error){
                        //TODO: show add button again
                    });
                }
            }.bind(this)}
          />

        );
    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted){
        return (
            <View
                key={`${sectionID}-${rowID}`}
                style={{
                  height: adjacentRowHighlighted ? 4 : 1,
                  backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC'
                }}
            />
        );
    }

    render() {

        const users = this.state.users.filter(function(user){
           return this.props.friendsList[user._id] == null;
        }.bind(this));

        return (
            <View style={this.props.style}>
              <View style={styles.mainContainer}>
                <SearchBar
                  lightTheme
                  onChangeText={(text) => this.search(text)}
                  placeholder='Search for friends...'
                  style={{backgroundColor:'yellow'}}/>
                <List style={{alignSelf:'stretch'}}>
                  <ListView
                    renderRow={this.renderRow}
                    dataSource={ds.cloneWithRows(users)}
                    renderSeparator={this.renderSeparator}
                    enableEmptySections
                  />
                </List>
              </View>
            </View>
        );
    }
}

AddFriendsScreen.propTypes = {
    navigator: PropTypes.object.isRequired,
    topLevelNavigator: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        userInfo: state.userInfo,
        userKey: state.userKey,
        friendsList: state.friendsList,
        friendRequests: state.friendRequests
    };
}

export default connect(mapStateToProps)(AddFriendsScreen);
