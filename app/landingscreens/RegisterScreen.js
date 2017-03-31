import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import FirebaseApp from '../FirebaseApp';
import {StyleSheet,Text,View,Navigator,TextInput,Button} from 'react-native';
import { setUserKey } from '../actions/userActions';
import LoadingScreen from './LoadingScreen';

class RegisterScreen extends Component {

    constructor(props,context){
        super(props,context);
        this.state = {
            email: "",
            password: ""
        };
        this.signup = this.signup.bind(this);
        this.back = this.back.bind(this);
    }

    async signup() {
        try {
            const resp = await FirebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
            const uid = resp.uid;
            this.props.actions.setUserKey(uid);
            this.props.navigator.push({screen: LoadingScreen});
        } catch (error) {

        }
    }

    back(){
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={this.props.style}>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({email: text})}
                    placeholder="Please enter your username..."
                    value={this.state.email}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({password: text})}
                    placeholder="Please enter your password..."
                    secureTextEntry
                    value={this.state.password}
                />
                <Button
                    title="Sign Up"
                    color="#8bc34a"
                    onPress={this.signup}
                />
                <Button
                    title="Back"
                    color="#e0e0e0"
                    onPress={this.back}
                />
            </View>
        );
    }
}

RegisterScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators({ setUserKey }, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(RegisterScreen);
