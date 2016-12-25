import React, { Component, PropTypes } from 'react';
import { FireAuth } from '../FirebaseApp';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Navigator
} from 'react-native';
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
                    title="Sign Up"
                    color="#8bc34a"
                    onPress={this.signup}
                />
                <Button
                    title="Back"
                    color="#e0e0e0"
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

