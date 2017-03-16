import React, { Component } from 'react';
import { Navigator, View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {HomeScreenNavigation} from './navscreens/ScreenNavs';
import { addToFriendsList, removeFromFriendsList } from './actions/friendsListActions';
import { addToFriendRequests, removeFromFriendRequests } from './actions/friendRequestsActions';
import { addToChallengesList, removeFromChallengesList } from './actions/challengesListActions';
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

        this.friendsRef = null;
        this.friendsAddedListener = null;
        this.friendsRemovedListener = null;


        this.friendRequestsRef = null;
        this.friendRequestAddedListener = null;
        this.friendRequestRemovedListener = null;

        this.challengeRequestRef = null;
        this.challengeRequestAddedListener = null;
        this.challengeRequestRemovedListener = null;

        this.listenUserFriends = this.listenUserFriends.bind(this);
        this.unlistenUserFriends = this.unlistenUserFriends.bind(this);


        this.listenFriendRequests = this.listenFriendRequests.bind(this);
        this.unlistenFriendRequests = this.unlistenFriendRequests.bind(this);

        this.listenUserChallenges = this.listenUserChallenges.bind(this);
        this.unlistenChallengeRequests = this.unlistenChallengeRequests.bind(this);


    }

    componentWillMount(){
        this.listenUserFriends();
        this.listenFriendRequests();
        this.listenUserChallenges();
    }

    componentWillUnmount(){
        this.unlistenUserFriends();
        this.unlistenChallengeRequests();
        this.props.actions.userLogout();
    }

    async listenUserFriends(){
        this.friendsRef = await FireDB.ref('friends/' + this.props.userKey);
        this.friendsAddedListener = this.friendsRef.on('child_added', function(data){
            this.props.actions.addToFriendsList({[data.key]:data.val()});
        }.bind(this));
        this.friendsRemovedListener = this.friendsRef.on('child_removed', function(snapshot) {
            this.props.actions.removeFromFriendsList(snapshot.key);
        }.bind(this));
    }

    async listenUserChallenges(){
        this.challengeRequestRef = await FireDB.ref('challenges/' + this.props.userKey);
        this.challengeRequestAddedListener = this.challengeRequestRef.on('child_added', function(data){
            this.props.actions.addToChallengesList({[data.key]:data.val()});
        }.bind(this));
        this.challengeRequestRemovedListener = this.challengeRequestRef.on('child_removed', function(snapshot) {
            this.props.actions.removeFromChallengesList(snapshot.key);
        }.bind(this));
    }

    unlistenChallengeRequests(){
      this.challengeRequestsRef.off('child_added',this.challengeRequestAddedListener);
      this.challengeRequestsRef.off('child_removed',this.challengeRequestRemovedListener);
    }

    unlistenUserFriends(){
        this.friendsRef.off('child_added',this.friendsAddedListener);
        this.friendsRef.off('child_removed',this.friendsRemovedListener);
    }

    async listenFriendRequests(){
        this.friendRequestsRef = FireDB.ref('friendRequests/' + this.props.userKey);
        this.friendRequestAddedListener = this.friendRequestsRef.on('child_added', function(snapshot) {
            this.props.actions.addToFriendRequests(snapshot.val());
        }.bind(this));
        this.friendRequestRemovedListener = this.friendRequestsRef.on('child_removed', function(snapshot) {
            this.props.actions.removeFromFriendRequests(snapshot.key);
        }.bind(this));
    }

    unlistenFriendRequests(){
        this.friendRequestsRef.off('child_added',this.friendRequestAddedListener);
        this.friendRequestsRef.off('child_removed',this.friendRequestRemovedListener);
    }



    render() {
        return (
            <Navigator initialRoute={HomeScreenNavigation}
                       renderScene={(route,navigator) => {
                           const Screen = route.screen;
                           if(route.challengeID){
                             const challengeID = route.challengeID;
                           }
                           return (
                              <Screen navigator={navigator}
                                      style={styles.screen}
                                      topLevelNavigator={this.props.navigator}
                                      route={route}
                                      {...route.passProps}
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

        actions: bindActionCreators({ addToFriendsList, removeFromFriendsList, userLogout, setUserInfo, setUserKey, addToFriendRequests, removeFromFriendRequests, addToChallengesList, removeFromChallengesList }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavApp);
