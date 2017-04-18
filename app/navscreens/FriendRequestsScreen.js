import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { FireDB } from '../FirebaseApp';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Button
} from 'react-native';
//import { List, ListItem, SearchBar } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    column: {
        flexDirection: 'column',
        padding: 10,
        justifyContent: 'space-around'
    },
    row:{
      flexDirection: 'row',
      padding:10,
      justifyContent:'space-around'
    },
    textContainer:{
      alignItems:'center'
    }
});

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class FriendRequestsScreen extends Component {

    constructor(props,context){
        super(props,context);
        this.state = {
            friendRequests: []
        };

        this.goBack = this.goBack.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.acceptFriend = this.acceptFriend.bind(this);
        this.rejectFriend = this.rejectFriend.bind(this);
    }

    renderRow(rowData, sectionID){
        return (
            <View style={styles.column}>
              <View style={styles.textContainer}>
                <Text>{rowData.userInfo.screenName}</Text>
              </View>
              <View style={{borderColor:'#BDBDBD', borderWidth:0.5, borderRadius:0, width: 75, alignSelf:'center'}}></View>
              <View style={styles.row}>
                <View>
                  <Button
                      title="accept"
                      color="#2196f3"
                      onPress={function(){
                      this.acceptFriend(rowData.id)
                    }.bind(this)}
                  />
                </View>
                <View>
                  <Button
                      title="decline"
                      color="red"
                      onPress={function(){
                      this.rejectFriend(rowData.id)
                    }.bind(this)}
                  />
                </View>
              </View>
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

    goBack(){
        this.props.navigator.pop();
    }

    async acceptFriend(friendID){
        const friendRef = FireDB.ref(`users/${friendID}`);
        friendRef.once('value',function(friendInfo){
            FireDB.ref(`friends/${friendID}/${this.props.userKey}`).set(this.props.userInfo);
            FireDB.ref(`friends/${this.props.userKey}/${friendID}`).set(friendInfo.val());
            FireDB.ref(`friendRequests/${this.props.userKey}/${friendID}`).set(null);
        }.bind(this));
    }

    async rejectFriend(friendID){
        return FireDB.ref(`friendRequests/${this.props.userKey}/${friendID}`).set(null);
    }



    render() {

        const friendRequests = Object.keys(this.props.friendRequests).map(function(id){
            return {id, userInfo: this.props.friendRequests[id]};
        }.bind(this));


        return (
            <ListView
                dataSource={ds.cloneWithRows(friendRequests)}
                renderRow={this.renderRow}
                renderSeparator={this.renderSeparator}
                style={this.props.style}
                enableEmptySections
            />
        );
    }
}

FriendRequestsScreen.propTypes = {
    navigator: PropTypes.object.isRequired,
    topLevelNavigator: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps){
    return {
        userKey: state.userKey,
        userInfo: state.userInfo,
        friendRequests: state.friendRequests
    };
}

export default connect(mapStateToProps)(FriendRequestsScreen);
