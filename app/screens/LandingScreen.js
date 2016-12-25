import React, {Component, PropTypes} from 'react';
import {View, Text, Button} from 'react-native';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import {FacebookAuthProvider, FireAuth} from '../FirebaseApp';


class LandingScreen extends Component{

    constructor(props,context){
        super(props,context);
        this.redirectLogin = this.redirectLogin.bind(this);
        this.redirectRegister = this.redirectRegister.bind(this);
        this.loginWithFacebook = this.loginWithFacebook.bind(this);
    }

    redirectLogin(){
        this.props.navigator.push({ screen: LoginScreen});
    }

    redirectRegister(){
        this.props.navigator.push({ screen: RegisterScreen});
    }

    async loginWithFacebook(){
        try{
            const result = await LoginManager.logInWithReadPermissions(['public_profile']);
            if(result.isCancelled){
                return;
            }
            const { accessToken } = await AccessToken.getCurrentAccessToken();
            const credential = FacebookAuthProvider.credential(accessToken);
            FireAuth.signInWithCredential(credential);
            this.props.navigator.push({ screen: HomeScreen});
        }
        catch(error){
            console.log("error",error);
        }
    }

    render(){


        return(
            <View>
                <Text>Please sign in to continue</Text>
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