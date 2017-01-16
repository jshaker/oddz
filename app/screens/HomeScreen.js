import React, {Component, PropTypes} from 'react';
import {View, Text, Button} from 'react-native';
import { FireDB, FireAuth} from '../FirebaseApp';
import CompleteRegistrationModal from '../modals/CompleteRegistrationModal';
import AddFriendsScreen from './AddFriendsScreen';
import { Examples } from '@shoutem/ui';

class HomeScreen extends Component{


    constructor(props,context){
        super(props,context);
        this.state = {
            userInfo: {},
            userInfoModal: false
        };

        this.logout = this.logout.bind(this);
        this.loadUserInfo = this.loadUserInfo.bind(this);
        this.redirectAddFriends = this.redirectAddFriends.bind(this);

    }

    componentWillMount(){
        this.loadUserInfo();
    }


    async logout(){
        await FireAuth.signOut();
        this.props.navigator.popToTop(0);
    }

    loadUserInfo(){
        const userId = FireAuth.currentUser.uid;
        const userRef = FireDB.ref('users/' + userId);
        userRef.on('value', function(data){
            if(data.val() == null){
                this.setState({userInfoModal: true});
            }
            else{
                this.setState({userInfoModal: false});
                this.setState({userInfo: data.val()});
            }
        }.bind(this));
    }

    redirectAddFriends(){
        this.props.navigator.push({ screen: AddFriendsScreen});
    }

    render(){
        return(
            <Examples/>
        );
    }
}


HomeScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};

export default HomeScreen;