import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import FirebaseApp from '../FirebaseApp';
import CompleteRegistrationModal from '../modals/CompleteRegistrationModal';
import { AddFriendsScreenNavigation, MyFriendsScreenNavigation, AcceptDeclineFriendScreenNavigation, ChallengeScreenNavigation } from './ScreenNavs';

class HomeScreen extends Component{


    constructor(props,context){
        super(props,context);
        this.state = {
            userInfoModal: false
        };

        this.logout = this.logout.bind(this);
        this.redirectAddFriends = this.redirectAddFriends.bind(this);
        this.redirectMyFriends = this.redirectMyFriends.bind(this);
        this.redirectFriendRequests = this.redirectFriendRequests.bind(this);
        this.redirectChallenge = this.redirectChallenge.bind(this);

    }

    async logout(){
        await FirebaseApp.auth().signOut();
        this.props.topLevelNavigator.popToTop(0);
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
                <CompleteRegistrationModal visible={this.props.userInfo === {}} />
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


function mapStateToProps(state, ownProps){
    return {
        userInfo: state.userInfo
    };
}

export default connect(mapStateToProps)(HomeScreen);
