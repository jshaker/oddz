import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import LoadingScreen from './LoadingScreen';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { setUserKey } from '../actions/userActions';
import FirebaseApp, {FacebookAuthProvider} from '../FirebaseApp';
import { Button, SocialIcon, Icon } from 'react-native-elements'

const styles = StyleSheet.create({
    container: {
        padding:10,
        flexDirection: 'column',
        justifyContent: 'space-around',
        flex:1
    },
    iconAndLabelContainer:{
      alignItems:'center',
      justifyContent:'center'
    },
});

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
            const {uid} = await FirebaseApp.auth().signInWithCredential(credential);
            this.props.actions.setUserKey(uid);
            this.props.navigator.push({screen: LoadingScreen});
        }
        catch(error){
            console.log("error",error);
        }
    }

    render(){


        return(
            <View style={this.props.style}>
              <View style={styles.container}>
                <View style={styles.iconAndLabelContainer}>
                  <Icon
                  reverse
                  raised
                  name='dice-6'
                  type='material-community'
                  color='#FF5252'
                  size={100}
                  style={styles.iconButton}
                  onPress={this.redirectChallenge} />
                </View>
                <View>
                  <Button
                      large
                      title="LOG IN"
                      color="white"
                      backgroundColor='#2196f3'
                      onPress={this.redirectLogin}
                  />
                  <Button
                      large
                      title="SIGN UP"
                      color="white"
                      backgroundColor='#ff5252'
                      onPress={this.redirectRegister}
                  />
                </View>
                <SocialIcon
                  title='CONNECT WITH FACEBOOK'
                  button
                  type='facebook'
                  onPress={this.loginWithFacebook}
                />
              </View>
            </View>
        );
    }
}

LandingScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators({ setUserKey }, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(LandingScreen);
