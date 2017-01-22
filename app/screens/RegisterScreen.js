import React, { Component, PropTypes } from 'react';
import FirebaseApp from '../FirebaseApp';
import {
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';
import { HomeScreenNavigation } from './ScreenNavs';


class RegisterScreen extends Component {

    constructor(props,context){
        super(props,context);
        this.state = {
            email: "",
            password: ""
        };
        this.signup = this.signup.bind(this);
    }

    async signup() {
        try {
            await FirebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
            this.props.navigator.push(HomeScreenNavigation);
        } catch (error) {

        }
    }

    render() {
        return (
            <View style={this.props.style}>
                <FormLabel>Username</FormLabel>
                <FormInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({email: text})}
                    placeholder="Please enter your username..."
                    value={this.state.email}
                />
                <FormLabel>Password</FormLabel>
                <FormInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({password: text})}
                    placeholder="Please enter your password..."
                    secureTextEntry
                    value={this.state.password}
                />
                <Button
                    title="Sign Up"
                    backgroundColor="#8bc34a"
                    onPress={this.signup}
                />
            </View>
        );
    }
}

RegisterScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};

export default RegisterScreen;

