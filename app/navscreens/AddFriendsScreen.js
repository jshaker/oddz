import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { FireDB } from '../FirebaseApp';
import Base64 from 'base-64';
import {StyleSheet,Text,View,ListView,Button,TextInput} from 'react-native';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between'
    }
});

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class AddFriendsScreen extends Component {

    constructor(props,context){
        super(props,context);
        this.state = {
            users: ds.cloneWithRows([]),
            userNode: {}
        };
        this.renderRow = this.renderRow.bind(this);
    }

    addFriend(userID){
        return FireDB.ref(`friendRequests/${userID}/${this.props.userInfo.key}`).set(this.props.userInfo);
    }

    async search(text){
        if(text == ""){
            return this.setState({users: ds.cloneWithRows([])});
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
            this.setState({users: ds.cloneWithRows(users)});
        }
        catch(error){
            console.log("error",error);
        }

    }

    renderRow(rowData){
        return (
            <View style={styles.row}>
                <Text>{rowData._source.screenName}</Text>
                <Button
                    title="+"
                    color="#2196f3"
                    onPress={function(){
                        //TODO: set button on loading state
                        this.addFriend(rowData._id).then(function(response){
                            //TODO: show checkmark instead of button
                        }.bind(this),
                        function(error){
                            //TODO: show add button again
                        });
                    }.bind(this)}
                />
            </View>
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
        return (
            <View style={this.props.style}>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.search(text)}
                    placeholder="Search for friends..."
                    clearButtonMode="always"
                />
                <ListView
                    dataSource={this.state.users}
                    renderRow={this.renderRow}
                    renderSeparator={this.renderSeparator}
                    enableEmptySections
                />
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
        userInfo: state.userInfo
    };
}

export default connect(mapStateToProps)(AddFriendsScreen);
