/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import * as firebase from "firebase";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';

export default class Login extends Component {

    constructor(props,context){
        super(props,context);
        this.state = {
            email: "",
            password: "",
            response: ""
        };
        this.signup = this.signup.bind(this);
        this.login = this.login.bind(this);
    }

    async signup() {
        try {
            await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
            this.setState({
                response: "account created"
            });
            //TODO thanks for signing up page!
        } catch (error) {
            this.setState({
                response: error.toString()
            })
        }
    }

    async login() {
        try {
            await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
            this.setState({
                response: "Logged In!"
            });
            //TODO go to landing page
        } catch (error) {
            this.setState({
                response: error.toString()
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
              <View>
                <Text style={styles.welcome}>
                    OddZ
                </Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({email: text})}
                    placeholder="Username"
                    value={this.state.email}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({password: text})}
                    placeholder="Password"
                    secureTextEntry
                    value={this.state.password}
                />
                <Button
                    title="Log In"
                    color="#ffc107"
                    accessibilityLabel="Learn more about this purple button"
                    onPress={this.login}
                />
                <Button
                    title="Sign Up!"
                    color="#3b5998"
                    accessibilityLabel="Learn more about this purple button"
                    onPress={this.signup}
                />
                <Button
                    title="Log In With Facebook"
                    color="#3b5998"
                    accessibilityLabel="Learn more about this purple button"
                    onPress={null}
                />
            </View>
            <View>
                <Text style={styles.response}>{this.state.response}</Text>
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});
