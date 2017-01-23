import React, { Component, PropTypes } from 'react';
import { FireDB, FireAuth } from '../FirebaseApp';
import {
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';
import {Button, List, ListItem} from 'react-native-elements';

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
        friendRequests: ds.cloneWithRows([]),
        userName: ''
      };
      this.goBack = this.goBack.bind(this);
      this.renderRow = this.renderRow.bind(this);
      this.getFriendRequests = this.getFriendRequests.bind(this);
      this.getUserName = this.getUserName.bind(this);
  }

  componentWillMount(){
      this.getFriendRequests();
      this.getUserName();
  }

  getUserName(){
    const currentUserId = FireAuth.currentUser.uid;
    const screenNameRef = FireDB.ref('users/' + currentUserId + '/screenName');
    screenNameRef.once('value', function(snapshot) {
        this.setState({userName: snapshot.val()})
    }.bind(this));
  }

  renderRow(rowData){
        return (
            <ListItem title={rowData._source.screenName}
                      rightIcon={{name: 'add'}}
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

  goBack(){
      this.props.navigator.pop();
  }

  getFriendRequests(){
      const currentUserId = FireAuth.currentUser.uid;
      const requestsRef = FireDB.ref('friendRequests/' + currentUserId );
      requestsRef.on('child_added', function(snapshot) {
          const requestList = [...this.state.friendRequests, {id: snapshot.key(), screenName: snapshot.val()}]
          this.setState({friendRequests: requestList})
      }.bind(this));
  }



  render() {
      return (
          <View>
          <List containerStyle={{marginBottom: 20}}>
            <ListView
                dataSource={this.state.friendRequests}
                renderRow={this.renderRow}
                renderSeparator={this.renderSeparator}
                enableEmptySections
            />
          </List>
          <Button
              title="Back"
              backgroundColor="#e0e0e0"
              onPress={this.goBack}
          />
          </View>
      )
    }
  }

  AcceptDeclineFriendScreen.propTypes = {
  navigator: PropTypes.object.isRequired
  };
