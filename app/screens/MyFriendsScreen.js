import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { FireDB, FireAuth} from '../FirebaseApp';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    }
});

class MyFriendsScreen extends Component{


    constructor(props,context){
        super(props,context);
        this.state = {
            friends: []
        };
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
                        this.viewUserInfo(rowData._id);
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
        friendsRef .on('value', function(data){
            this.setState({friends: data});
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
                <List>
                    <ListView
                        dataSource={this.state.friends}
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