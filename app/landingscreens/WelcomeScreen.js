import React, { Component, PropTypes } from 'react';
import { View, Text} from 'react-native';
import {connect} from 'react-redux';
import LoadingScreen from './LoadingScreen';
import LandingScreen from './LandingScreen';
import { bindActionCreators } from 'redux';
import { setUserKey } from '../actions/userActions';
import FirebaseApp from '../FirebaseApp';

class WelcomeScreen extends Component {


    constructor(props,context){
        super(props,context);
        this.getAsyncCredential = this.getAsyncCredential.bind(this);
    }

    componentDidMount(){
        setTimeout(function(){
            this.getAsyncCredential();
        }.bind(this), 1500);
    }

    async getAsyncCredential(){
        try{
            const {uid} = await FirebaseApp.auth().currentUser;
            this.props.actions.setUserKey(uid);
            this.props.navigator.push({screen: LoadingScreen});
        }
        catch(error){
            console.log("error",error);
            this.props.navigator.replace({screen: LandingScreen});
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