import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import FirebaseApp, { FireDB } from '../FirebaseApp';
import CompleteRegistrationModal from '../modals/CompleteRegistrationModal';
import { AddFriendsScreenNavigation, MyFriendsScreenNavigation, AcceptDeclineFriendScreenNavigation, ChallengeScreenNavigation } from './ScreenNavs';

class HomeScreen extends Component{


    constructor(props,context){
        super(props,context);
        this.state = {
            userInfo: {},
            userInfoModal: false
        };

        this.userRef = null;
        this.listener = null;

        this.logout = this.logout.bind(this);
        this.listenUserInfo = this.listenUserInfo.bind(this);
        this.unlistenUserInfo = this.unlistenUserInfo.bind(this);
        this.redirectAddFriends = this.redirectAddFriends.bind(this);
        this.redirectMyFriends = this.redirectMyFriends.bind(this);
        this.redirectFriendRequests = this.redirectFriendRequests.bind(this);
        this.redirectChallenge = this.redirectChallenge.bind(this);

    }

    componentWillMount(){
        this.listenUserInfo();
    }


    componentWillUnmount(){
        this.unlistenUserInfo();
    }


    async logout(){
        await FirebaseApp.auth().signOut();
        this.props.topLevelNavigator.popToTop(0);
    }

    async listenUserInfo(){
        this.userRef = FireDB.ref('users/' + await FirebaseApp.auth().currentUser.uid);
        this.listener = this.userRef.on('value', function(data){
            if(data.val() == null){
                this.setState({userInfoModal: true});
            }
            else{
                this.setState({userInfoModal: false});
                this.setState({userInfo: data.val()});
            }
        }.bind(this));
    }

    unlistenUserInfo(){
        this.userRef.off('value', this.listener);
    }

    redirectAddFriends(){
        this.props.navigator.push(AddFriendsScreenNavigation);
    }

    redirectMyFriends(){
        this.props.navigator.push(MyFriendsScreenNavigation);
    }

    redirectFriendRequests(){
        this.props.navigator.push(AcceptDeclineFriendScreenNavigation);
    }

    redirectChallenge(){
        this.props.navigator.push(ChallengeScreenNavigation);
    }

    render(){
        return(
            <View style={this.props.style}>
                <CompleteRegistrationModal visible={this.state.userInfoModal} />
                <Button
                    raised
                    title="Add Friends"
                    color="#2196f3"
                    onPress={this.redirectAddFriends}
                />
                <Button
                    raised
                    title="My Friends"
                    color="#ffc107"
                    onPress={this.redirectMyFriends}
                />
                <Button
                    raised
                    title="Friend Requests"
                    color="#ffc107"
                    onPress={this.redirectFriendRequests}
                />
                <Button
                    raised
                    title="Challenge"
                    color="#ffc107"
                    onPress={this.redirectChallenge}
                />
                <Button
                    raised
                    title="Log Out"
                    color="#e0e0e0"
                    onPress={this.logout}
                />
            </View>
        );
    }
}


HomeScreen.propTypes = {
    navigator: PropTypes.object.isRequired,
    topLevelNavigator: PropTypes.object.isRequired
};

export default HomeScreen;
