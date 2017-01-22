import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, ListView} from 'react-native';
import FirebaseApp, { FireDB } from '../FirebaseApp';
import { Button, List, ListItem } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
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
        this.goBack = this.goBack.bind(this);
        this.viewUserInfo = this.viewUserInfo.bind(this);
    }

    goBack(){
        this.props.navigator.pop();
    }

    viewUserInfo(userId){

    }

    renderRow(rowData){
        return (
            <ListItem title={rowData.screenName}
                      onPress={function(){
                        this.viewUserInfo(rowData.key);
                      }.bind(this)}
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
            <View style={styles.container}>
                <Button
                    title="Back"
                    backgroundColor="#e0e0e0"
                    onPress={this.goBack}
                />
                <List>
                    <ListView
                        dataSource={ds.cloneWithRows(this.state.friends)}
                        renderRow={this.renderRow}
                        enableEmptySections
                    />
                </List>
            </View>
        );
    }
}


MyFriendsScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};

export default MyFriendsScreen;