import React, { Component, PropTypes } from 'react';
import Firebase from '../Firebase';
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

class LoginScreen extends Component {

    constructor(props,context){
        super(props,context);
        this.state = {
            email: "",
            password: ""
        };
        this.login = this.login.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    async login() {
        try {
            await Firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
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
                    title="Log In"
                    color="#ffc107"
                    onPress={this.login}
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

LoginScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};

export default LoginScreen;

