import React, { Component, PropTypes } from 'react';
import { FireDB, FireAuth } from '../FirebaseApp';
import Base64 from 'base-64';
import {
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';
import Button from 'react-native-elements';

const styles = StyleSheet.create({
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
          users: ds.cloneWithRows([])
      };
      this.goBack = this.goBack.bind(this);
  }

  goBack(){
      this.props.navigator.pop();
  }

  render() {
      return (
          <View>

          </View>
      );
  }
  }

  AcceptDeclineFriendScreen.propTypes = {
  navigator: PropTypes.object.isRequired
  };
