import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, ListView, Button} from 'react-native';
import FirebaseApp, { FireDB } from '../FirebaseApp';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between'
    }
});

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class MyFriendsScreen extends Component{


    constructor(props,context){
        super(props,context);
        this.state = {
            friends: [],
        };

        this.friendsRef = null;
        this.listener = null;


        this.renderRow = this.renderRow.bind(this);
        this.listenUserFriends = this.listenUserFriends.bind(this);
        this.unlistenUserFriends = this.unlistenUserFriends.bind(this);
        this.viewUserInfo = this.viewUserInfo.bind(this);
    }

    viewUserInfo(userId){

    }

    renderRow(rowData){
        return (
            <View style={styles.row}>
                <Text>{rowData.screenName}</Text>
                <Button
                    title=">"
                    color="#2196f3"
                    onPress={function(){
                        this.viewUserInfo(rowData.key);
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

    componentWillMount(){
        this.listenUserFriends();
    }

    componentWillUnmount(){
        this.unlistenUserFriends();
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
            <View style={this.props.style}>
                <ListView
                    dataSource={ds.cloneWithRows(this.state.friends)}
                    renderRow={this.renderRow}
                    renderSeparator={this.renderSeparator}
                    enableEmptySections
                />
            </View>
        );
    }
}


MyFriendsScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};

export default MyFriendsScreen;