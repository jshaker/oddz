import React, {Component, PropTypes} from 'react';
import {View, Text, Button} from 'react-native';
import { FireDB, FireAuth} from '../FirebaseApp';
import CompleteRegistrationModal from '../modals/CompleteRegistrationModal';
import AddFriendsScreen from './AddFriendsScreen';

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


    logout(){
        //TODO: destroy firebase session
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
            <View>
                <CompleteRegistrationModal visible={this.state.userInfoModal} />
                <Text>Logged In</Text>
                <Button
                    title="Add Friends"
                    color="#2196f3"
                    onPress={this.redirectAddFriends}
                />
                <Button
                    title="Log Out"
                    color="#e0e0e0"
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