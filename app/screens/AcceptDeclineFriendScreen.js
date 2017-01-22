import React, { Component, PropTypes } from 'react';
import { FireDB, FireAuth } from '../FirebaseApp';
import {
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';
import Button from 'react-native-elements';

export default class AcceptDeclineFriendScreen extends Component {

  constructor(props,context){
      super(props,context);
      this.state = {
        friendRequests: ds.cloneWithRows([])
      };
      this.goBack = this.goBack.bind(this);
      this.renderRow = this.renderRow.bind(this);
      this.getFriendRequests = this.getFriendRequests.bind(this);
  }

  componentWillMount(){
      this.getFriendRequests();
  }

  renderRow(rowData){
      return (
          <View style={styles.row}>
              <Text>{rowData._source.screenName}</Text>
              <Button
                  title="+"
                  backgroundColor="#2196f3"
                  onPress={function(){
                      //TODO: set button on loading state
                      this.addFriend(rowData._id, rowData._source.screenName).then(function(response){
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

  goBack(){
      this.props.navigator.pop();
  }

  getFriendRequests(){
    const currentUserId = FireAuth.currentUser.uid;
    const requests = FireDB.ref('friendRequests/' + userId);
    return this.setState({friendRequests: ds.cloneWithRows([requests])});
  }



  render() {
    console.log(this.friendRequests);
      return (
          <View>
          <Button
              title="Back"
              backgroundColor="#e0e0e0"
              onPress={this.goBack}
          />
          </View>
      );
  }
  }

  AcceptDeclineFriendScreen.propTypes = {
  navigator: PropTypes.object.isRequired
  };
