import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { FireDB, FireAuth} from '../FirebaseApp';
import CompleteRegistrationModal from '../modals/CompleteRegistrationModal';
import AddFriendsScreen from './AddFriendsScreen';
import AcceptDeclineFriendScreen from './AcceptDeclineFriendScreen';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    }
});

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
        this.redirectAcceptDeclineFriendScreen = this.redirectAcceptDeclineFriendScreen.bind(this);

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

    redirectAcceptDeclineFriendScreen(){
        this.props.navigator.push({ screen: AcceptDeclineFriendScreen});
    }

    render(){
        return(
            <View style={styles.container}>
                <CompleteRegistrationModal visible={this.state.userInfoModal} />
                <Text>Logged In</Text>
                <Button
                    raised
                    title="Add Friends"
                    backgroundColor="#2196f3"
                    onPress={this.redirectAddFriends}
                />
                <Button
                    raised
                    title="Log Out"
                    backgroundColor="#e0e0e0"
                    onPress={this.logout}
                />
                <Button
                    raised
                    title="View Friend Request"
                    backgroundColor="#2196f3"
                    onPress={this.redirectAcceptDeclineFriendScreen}
                />
            </View>
        );
    }
}


HomeScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};

export default HomeScreen;
