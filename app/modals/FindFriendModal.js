import React, {Component, PropTypes} from 'react';
import {Modal, View, TextInput, Text, TouchableHighlight, StyleSheet, ListView} from 'react-native';
import {connect} from 'react-redux';
import { FireDB } from '../FirebaseApp';
import { Button } from 'react-native-elements'

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
        this.friendsRef = FireDB.ref('friends/' + this.props.userKey);
        this.listener = this.friendsRef.on('child_added', function(data){
            const friendsList = [...this.state.friends,{screenName:data.val().screenName, key: data.key}];
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
             <View style={{marginTop: 64, flex: 1, flexDirection: 'column', justifyContent: 'space-around'}}>
                 <ListView
                     dataSource={ds.cloneWithRows(this.state.friends)}
                     renderRow={this.renderRow}
                     renderSeparator={this.renderSeparator}
                     enableEmptySections
                 />
                 <View>


                  <Button
                    medium
                    backgroundColor='#ff5252'
                    title='CLOSE'
                    onPress={this.props.closeModal}
                    />

                </View>
             </View>
          </Modal>
        );
    }
}

FindFriendModal.propTypes = {
    visible: PropTypes.bool,
    handleTouch: PropTypes.func,
    closeModal: PropTypes.func
};

function mapStateToProps(state, ownProps){
    return {
        userKey: state.userKey,
        userInfo: state.userInfo
    };
}

export default connect(mapStateToProps)(FindFriendModal);
