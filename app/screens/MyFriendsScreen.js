import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, ListView} from 'react-native';
import { FireDB, FireAuth} from '../FirebaseApp';
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

        this.renderRow = this.renderRow.bind(this);
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
        this.loadUserFriends();
    }

    loadUserFriends(){
        const userId = FireAuth.currentUser.uid;
        const friendsRef = FireDB.ref('friends/' + userId);
        friendsRef.on('child_added', function(data){
            const friendsList = [...this.state.friends,{screenName:data.val(), key: data.key}];
            this.setState({friends: friendsList});
        }.bind(this));
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
                        renderSeparator={this.renderSeparator}
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