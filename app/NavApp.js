import React, { Component } from 'react';
import { Navigator, View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {HomeScreenNavigation} from './navscreens/ScreenNavs';
import { addToFriendsList } from './actions/friendsListActions';
import { userLogout, setUserInfo, setUserKey } from './actions/userActions';
import {FireDB} from './FirebaseApp';

const styles = StyleSheet.create({
    screen: {
        paddingTop: 70,
        flex: 1,
        backgroundColor: '#F5FCFF'
    }
});

class NavApp extends Component {

    constructor(props,context){
        super(props,context);

        this.userRef = null;
        this.userListener = null;

        this.friendsRef = null;
        this.friendsListener = null;

        this.listenUserInfo = this.listenUserInfo.bind(this);
        this.unlistenUserInfo = this.unlistenUserInfo.bind(this);
        this.listenUserFriends = this.listenUserFriends.bind(this);
        this.unlistenUserFriends = this.unlistenUserFriends.bind(this);
    }

    componentWillMount(){
        this.listenUserInfo();
        this.listenUserFriends();
    }

    componentWillUnmount(){
        this.unlistenUserFriends();
        this.unlistenUserInfo();
        this.props.actions.userLogout();
    }

    async listenUserInfo(){
        this.userRef = await FireDB.ref('users/' + this.props.userKey);
        this.userListener = this.userRef.on('value', function(data){
            this.props.actions.setUserInfo(data.val());
        }.bind(this));
    }

    unlistenUserInfo(){
        this.userRef.off('value', this.userListener);
    }

    async listenUserFriends(){
        this.friendsRef = await FireDB.ref('friends/' + this.props.userKey);
        this.friendsListener = this.friendsRef.on('child_added', function(data){
            this.props.actions.addToFriendsList({[data.key]:data.val()});
        }.bind(this));
    }

    unlistenUserFriends(){
        this.friendsRef.off('child_added',this.friendsListener);
    }


    render() {
        return (
            <Navigator initialRoute={HomeScreenNavigation}
                       renderScene={(route,navigator) => {
                           const Screen = route.screen;
                           return (
                              <Screen navigator={navigator}
                                      style={styles.screen}
                                      topLevelNavigator={this.props.navigator}
                              />
                           );
                       }}
                       navigationBar={
                           <Navigator.NavigationBar
                            routeMapper={{
                               LeftButton: (route, navigator, index, navState) =>
                                {
                                    if (route.showBackButton) {
                                      return (
                                        <TouchableHighlight onPress={() => navigator.pop()}>
                                          <Text>Back</Text>
                                        </TouchableHighlight>
                                      );
                                    } else {
                                      return null;
                                    }
                                },
                               RightButton: (route, navigator, index, navState) =>
                                 { return null; },
                               Title: (route, navigator, index, navState) =>
                                 { return (<Text>{route.title}</Text>); },
                             }}
                            style={{backgroundColor: '#2196f3'}}
                           />
                       }
            />
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        userKey: state.userKey
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators({ addToFriendsList, userLogout, setUserInfo, setUserKey }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavApp);
