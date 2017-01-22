import React, { Component, PropTypes } from 'react';
import FirebaseApp from '../FirebaseApp';
import {
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';
import HomeScreenNavigation from './ScreenNavs';

import { Button, FormLabel, FormInput} from 'react-native-elements';

class LoginScreen extends Component {

    constructor(props,context){
        super(props,context);
        this.state = {
            email: "",
            password: ""
        };
        this.login = this.login.bind(this);
    }

    async login() {
        try {
            await FirebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
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
                    title="Log In"
                    backgroundColor="#ffc107"
                    onPress={this.login}
                />
            </View>
        );
    }
}

LoginScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};

export default LoginScreen;

