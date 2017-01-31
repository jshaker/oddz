import React, {Component, PropTypes} from 'react';
import {Modal, View, TextInput, Text, Button, TouchableHighlight, StyleSheet, ListView} from 'react-native';
import FirebaseApp, { FireDB } from '../FirebaseApp';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between'
    }
});

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class FindFriendModal extends Component{


    constructor(props,context){
        super(props,context);
        this.state = {
            friends: [],
        };

        this.friendsRef = null;
        this.listener = null;

        this.listenUserFriends = this.listenUserFriends.bind(this);
        this.unlistenUserFriends = this.unlistenUserFriends.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }

    componentWillMount(){
        this.listenUserFriends();
    }

    componentWillUnmount(){
        this.unlistenUserFriends();
    }

    renderRow(rowData){
        return (
          <TouchableHighlight onPress={() => this.props.handleTouch(rowData.key)}>
            <View style={styles.row}>
                <Text>{rowData.screenName}</Text>
            </View>
          </TouchableHighlight>
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

    async listenUserFriends(){
        this.friendsRef = FireDB.ref('friends/' + await FirebaseApp.auth().currentUser.uid);
        this.listener = this.friendsRef.on('child_added', function(data){
            const friendsList = [...this.state.friends,{screenName:data.val(), key: data.key}];
            this.setState({friends: friendsList});
        }.bind(this));
    }

    unlistenUserFriends(){
        this.friendsRef.off('child_added',this.listener);
    }

    render(){
        return(
          <Modal
              animationType={"slide"}
              transparent={false}
              visible={this.props.visible}
              onRequestClose={() => {alert("Modal has been closed.")}}
          >
             <View style={{marginTop: 22}}>
             <ListView
                 dataSource={ds.cloneWithRows(this.state.friends)}
                 renderRow={this.renderRow}
                 renderSeparator={this.renderSeparator}
                 enableEmptySections
             />
              <View>

                <Button
                  onPress={() => {
                    this.setState({modalVisible: false})
                  }}
                  title="Close Modal"
                  color="#841584"
                  accessibilityLabel="Pick a friend to challenge"
                />

              </View>
             </View>
          </Modal>
        );
    }
}


FindFriendModal.propTypes = {
    visible: PropTypes.bool,
    handleTouch: PropTypes.func
};

export default FindFriendModal;
