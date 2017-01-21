import React, { Component, PropTypes } from 'react';
import { FireAuth } from '../FirebaseApp';
import {
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';
import HomeScreen from './HomeScreen';


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

class RegisterScreen extends Component {

    constructor(props,context){
        super(props,context);
        this.state = {
            email: "",
            password: ""
        };
        this.signup = this.signup.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    async signup() {
        try {
            await FireAuth.createUserWithEmailAndPassword(this.state.email, this.state.password);
            this.props.navigator.push({ screen: HomeScreen });
        } catch (error) {

        }
    }

    goBack(){
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    OddZ
                </Text>
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
                <Button
                    title="Back"
                    backgroundColor="#e0e0e0"
                    onPress={this.goBack}
                />
            </View>
        );
    }
}

RegisterScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};

export default RegisterScreen;

