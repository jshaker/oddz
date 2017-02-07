import React, { Component, PropTypes } from 'react';
import FirebaseApp from '../FirebaseApp';
import {StyleSheet,Text,View,Navigator,Button,TextInput} from 'react-native';
import NavApp from '../NavApp';

class LoginScreen extends Component {

    constructor(props,context){
        super(props,context);
        this.state = {
            email: "",
            password: ""
        };
        this.login = this.login.bind(this);
        this.back = this.back.bind(this);
    }

    async login() {
        try {
            await FirebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
            this.props.navigator.push({screen: NavApp});

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
                    title="Log In"
                    color="#ffc107"
                    onPress={this.login}
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

LoginScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};

export default LoginScreen;
