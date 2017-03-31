import React, { Component, PropTypes } from 'react';
import { View, Text, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import LoadingScreen from './LoadingScreen';
import LandingScreen from './LandingScreen';
import { bindActionCreators } from 'redux';
import { setUserKey } from '../actions/userActions';
import FirebaseApp, {FacebookAuthProvider} from '../FirebaseApp';

class WelcomeScreen extends Component {


    constructor(props,context){
        super(props,context);
        this.getAsyncCredential = this.getAsyncCredential.bind(this);
    }

    componentDidMount(){
        this.getAsyncCredential();
    }

    async getAsyncCredential(){
        const emailInfo = await AsyncStorage.getItem('@Oddz:emailInfo');
        const fbAccessToken = await AsyncStorage.getItem('@Oddz:fbAccessToken');
        if(emailInfo){
            try{
                const {uid} = await FirebaseApp.auth().signInWithEmailAndPassword(...JSON.parse(emailInfo));
                this.props.actions.setUserKey(uid);
                setTimeout(function(){
                    this.props.navigator.replace({screen: LoadingScreen});
                }.bind(this),1500);
            }
            catch(error){
                console.log("error",error);
                setTimeout(function(){
                    this.props.navigator.replace({screen: LandingScreen});
                }.bind(this),1500);
            }
        }
        else if(fbAccessToken){
            try{
                const credential = FacebookAuthProvider.credential(fbAccessToken);
                const {uid} = await FirebaseApp.auth().signInWithCredential(credential);
                this.props.actions.setUserKey(uid);
                setTimeout(function(){
                    this.props.navigator.replace({screen: LoadingScreen});
                }.bind(this),1500);
            }
            catch(error){
                console.log("error",error);
                setTimeout(function(){
                    this.props.navigator.replace({screen: LandingScreen});
                }.bind(this),1500);
            }
        }
        else{
            setTimeout(function(){
                this.props.navigator.replace({screen: LandingScreen});
            }.bind(this),1500);
        }
    }

    render() {

        return (
            <View style={this.props.style}>
                <Text>OddZ</Text>
            </View>
        );
    }
}

WelcomeScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators({ setUserKey }, dispatch)
    };
}

export default connect(null,mapDispatchToProps)(WelcomeScreen);