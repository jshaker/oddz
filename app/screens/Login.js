import React, { Component, PropTypes } from 'react';
import * as firebase from "firebase";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Navigator
} from 'react-native';
import Home from './Home';


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

class Login extends Component {

    constructor(props,context){
        super(props,context);
        this.state = {
            email: "",
            password: ""
        };
        this.signup = this.signup.bind(this);
        this.login = this.login.bind(this);
    }

    async signup() {
        try {
            await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);

        } catch (error) {

        }
    }

    async login() {
        try {
            await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
            this.props.navigator.push({ screen: Home });

        } catch (error) {

        }
    }

    render() {
        return (
            <View style={styles.container}>
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
                    onPress={this.login}
                />
                <Button
                    title="Sign Up"
                    color="#8bc34a"
                    onPress={this.signup}
                />
                <Button
                    title="Log In With Facebook"
                    color="#3b5998"
                    onPress={() => null}
                />
            </View>
        );
    }
}

Login.propTypes = {
    navigator: PropTypes.object.isRequired
};

export default Login;

