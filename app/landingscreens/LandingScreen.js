import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import NavApp from '../NavApp';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import FirebaseApp, {FacebookAuthProvider} from '../FirebaseApp';

class LandingScreen extends Component{

    constructor(props,context){
        super(props,context);
        this.redirectLogin = this.redirectLogin.bind(this);
        this.redirectRegister = this.redirectRegister.bind(this);
        this.loginWithFacebook = this.loginWithFacebook.bind(this);
    }

    redirectLogin(){
        this.props.navigator.push({screen: LoginScreen});
    }

    redirectRegister(){
        this.props.navigator.push({screen: RegisterScreen});
    }

    async loginWithFacebook(){
        try{
            const result = await LoginManager.logInWithReadPermissions(['public_profile']);
            if(result.isCancelled){
                return;
            }
            const { accessToken } = await AccessToken.getCurrentAccessToken();
            const credential = FacebookAuthProvider.credential(accessToken);
            await FirebaseApp.auth().signInWithCredential(credential);
            this.props.navigator.push({screen: NavApp});
        }
        catch(error){
            console.log("error",error);
        }
    }

    render(){


        return(
            <View style={this.props.style}>
                <Button
                    title="Log In"
                    color="#ffc107"
                    onPress={this.redirectLogin}
                />
                <Button
                    title="Sign Up"
                    color="#8bc34a"
                    onPress={this.redirectRegister}
                />
                <Button
                    title="Continue With Facebook"
                    color="#3b5998"
                    onPress={this.loginWithFacebook}
                />
            </View>
        );
    }
}

LandingScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};

export default LandingScreen;