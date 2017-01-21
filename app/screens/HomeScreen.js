import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FirebaseApp, { FireDB } from '../FirebaseApp';
import CompleteRegistrationModal from '../modals/CompleteRegistrationModal';
import { AddFriendsScreenNavigation, MyFriendsScreenNavigation } from './ScreenNavs';
import { Button } from 'react-native-elements';

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
        this.redirectMyFriends = this.redirectMyFriends.bind(this);

    }

    componentWillMount(){
        this.loadUserInfo();
    }


    async logout(){
        await FirebaseApp.auth().signOut();
        this.props.navigator.popToTop(0);
    }

    async loadUserInfo(){
        const userId = await FirebaseApp.auth().currentUser.uid;
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
        this.props.navigator.push(AddFriendsScreenNavigation);
    }

    redirectMyFriends(){
        this.props.navigator.push(MyFriendsScreenNavigation);
    }

    render(){
        return(
            <View style={this.props.style}>
                <CompleteRegistrationModal visible={this.state.userInfoModal} />
                <Button
                    raised
                    title="Add Friends"
                    backgroundColor="#2196f3"
                    onPress={this.redirectAddFriends}
                />
                <Button
                    raised
                    title="My Friends"
                    backgroundColor="#ffc107"
                    onPress={this.redirectMyFriends}
                />
                <Button
                    raised
                    title="Log Out"
                    backgroundColor="#e0e0e0"
                    onPress={this.logout}
                />
            </View>
        );
    }
}


HomeScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};

export default HomeScreen;