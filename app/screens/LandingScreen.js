import React, {Component, PropTypes} from 'react';
import {View, Text, Button} from 'react-native';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';


class LandingScreen extends Component{

    render(){

        const redirectLogin = function(){
          this.props.navigator.push({ screen: LoginScreen});
        }.bind(this);


        const redirectRegister = function(){
            this.props.navigator.push({ screen: RegisterScreen});
        }.bind(this);


        const loginWithFacebook = function(){
            //TODO: facebook auth login
            this.props.navigator.push({ screen: HomeScreen});
        }.bind(this);

        return(
            <View>
                <Text>Please sign in to continue</Text>
                <Button
                    title="Log In"
                    color="#ffc107"
                    onPress={redirectLogin}
                />
                <Button
                    title="Sign Up"
                    color="#8bc34a"
                    onPress={redirectRegister}
                />
                <Button
                    title="Continue With Facebook"
                    color="#3b5998"
                    onPress={loginWithFacebook}
                />
            </View>
        );
    }
}

LandingScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};

export default LandingScreen;