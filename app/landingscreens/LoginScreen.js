import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import FirebaseApp from '../FirebaseApp';
import {StyleSheet,Text,View,Navigator,TextInput} from 'react-native';
import { setUserKey } from '../actions/userActions';
import LoadingScreen from './LoadingScreen';
import { FormLabel, FormInput, Button, Icon } from 'react-native-elements'

const styles = StyleSheet.create({
    container: {
        padding:10,
        flexDirection: 'column',
        justifyContent: 'space-around',
        flex:1
    },
    iconAndLabelContainer:{
      alignItems:'center',
      justifyContent:'center'
    },
    iconButton:{
      alignSelf:'center'
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
        this.back = this.back.bind(this);
    }

    async login() {
        try {
            const resp = await FirebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
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
              <View style={styles.container}>
                <View style={styles.iconAndLabelContainer}>
                  <Icon
                  reverse
                  raised
                  name='clipboard-account'
                  type='material-community'
                  color='#FF5252'
                  size={100}
                  style={styles.iconButton}
                  />
                </View>
                <View>
                  <FormLabel>Enter Username</FormLabel>
                  <FormInput
                      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                      onChangeText={(text) => this.setState({email: text})}
                      placeholder="Username"
                      value={this.state.email}
                  />
                  <FormLabel>Enter Password</FormLabel>
                  <FormInput
                      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                      onChangeText={(text) => this.setState({password: text})}
                      placeholder="Password"
                      secureTextEntry
                      value={this.state.password}
                  />
                </View>
                <View>
                  <Button
                      title="Log In"
                      backgroundColor="#2196f3"
                      onPress={this.login}
                  />
                  <Button
                      title="Back"
                      backgroundColor="#ff5252"
                      onPress={this.back}
                  />
                </View>
              </View>
            </View>
        );
    }
}

LoginScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators({ setUserKey }, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(LoginScreen);
