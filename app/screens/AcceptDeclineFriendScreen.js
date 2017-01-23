import React, { Component, PropTypes } from 'react';
import FirebaseApp, { FireDB } from '../FirebaseApp';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Button
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    row: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between'
    }
});

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class AcceptDeclineFriendScreen extends Component {

  constructor(props,context){
      super(props,context);
      this.state = {
        friendRequests: [],
        userName: ''
      };

      this.requestsRef = null;
      this.listener = null;
      this.listenerChildRemoved = null;

      this.goBack = this.goBack.bind(this);
      this.renderRow = this.renderRow.bind(this);
      this.listenFriendRequests = this.listenFriendRequests.bind(this);
      this.unlistenFriendRequests = this.unlistenFriendRequests.bind(this);
      this.getUserName = this.getUserName.bind(this);
      this.acceptFriend = this.acceptFriend.bind(this);
      this.rejectFriend = this.rejectFriend.bind(this);
  }

  componentWillMount(){
      this.listenFriendRequests();
      this.getUserName();
  }

  componentWillUnmount(){
      this.unlistenFriendRequests();
  }

  async getUserName(){
    const currentUserId = await FirebaseApp.auth().currentUser.uid;
    const screenNameRef = FireDB.ref('users/' + currentUserId + '/screenName');
    screenNameRef.once('value', function(snapshot) {
        this.setState({userName: snapshot.val()})
    }.bind(this));
  }

  renderRow(rowData){
      return (
          <View style={styles.row}>
              <Text>{rowData.screenName}</Text>
              <Button
                  title="accept"
                  color="#2196f3"
                  onPress={function(){
                    this.acceptFriend(rowData.id, rowData.screenName)
                  }.bind(this)}
              />
              <Button
                  title="decline"
                  color="red"
                  onPress={function(){
                    this.rejectFriend(rowData.id, rowData.screenName)
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

  goBack(){
      this.props.navigator.pop();
  }

  async listenFriendRequests(){
      this.requestsRef = FireDB.ref('friendRequests/' + await FirebaseApp.auth().currentUser.uid );
      this.listener = this.requestsRef.on('child_added', function(snapshot) {
          const requestList = [...this.state.friendRequests, {id: snapshot.key, screenName: snapshot.val()}]
          this.setState({friendRequests: requestList})
      }.bind(this));
      this.listenerChildRemoved = this.requestsRef.on('child_removed', function(snapshot) {
          const requestList = [...this.state.friendRequests]
          for(var i=0; i<requestList.length; i++){
              if(requestList[i].id == snapshot.key){
                  requestList.splice(i, 1);
                  break;
              }
          }
          this.setState({friendRequests: requestList})
      }.bind(this));
  }

  unlistenFriendRequests(){
      this.requestsRef.off('child_added',this.listener);
      this.requestsRef.off('child_removed',this.listenerChildRemoved);
  }

  async acceptFriend(friendID, friendName){
      const currentUserId = await FirebaseApp.auth().currentUser.uid;
      FireDB.ref(`friends/${friendID}/${currentUserId}`).set(this.state.userName);
      FireDB.ref(`friends/${currentUserId}/${friendID}`).set(friendName);
      return FireDB.ref(`friendRequests/${currentUserId}/${friendID}`).set(null);
  }

  async rejectFriend(friendID, friendName){
      const currentUserId = await FirebaseApp.auth().currentUser.uid;
      return FireDB.ref(`friendRequests/${currentUserId}/${friendID}`).set(null);
  }



  render() {
    console.log(this.state.friendRequests)
      return (
          <ListView
              dataSource={ds.cloneWithRows(this.state.friendRequests)}
              renderRow={this.renderRow}
              renderSeparator={this.renderSeparator}
              style={{marginTop:60}}
              enableEmptySections
          />
      )
    }
  }

  AcceptDeclineFriendScreen.propTypes = {
  navigator: PropTypes.object.isRequired
  };
