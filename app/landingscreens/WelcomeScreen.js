import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import LoadingScreen from './LoadingScreen';
import LandingScreen from './LandingScreen';
import { bindActionCreators } from 'redux';
import { setUserKey } from '../actions/userActions';
import FirebaseApp from '../FirebaseApp';

const styles = StyleSheet.create({
    container: {
        padding:10,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#FF5252',
        flex:1
    },
    iconButton:{
      alignSelf:'center'
    },
    iconButton:{
      alignSelf:'center'
    }
});

class WelcomeScreen extends Component {


    constructor(props,context){
        super(props,context);
        this.getAsyncCredential = this.getAsyncCredential.bind(this);
    }

    componentDidMount(){
        setTimeout(function(){
            this.getAsyncCredential();
        }.bind(this), 1500);
    }

    async getAsyncCredential(){
        try{
            const {uid} = await FirebaseApp.auth().currentUser;
            this.props.actions.setUserKey(uid);
            this.props.navigator.push({screen: LoadingScreen});
        }
        catch(error){
            console.log("error",error);
            this.props.navigator.replace({screen: LandingScreen});
        }
    }

    render() {

        return (
            <View style={this.props.style}>
              <View style={styles.container}
                <View style={styles.iconAndLabelContainer}>
                  <Icon
                  name='dice-6'
                  type='material-community'
                  color='white'
                  size={100}
                  style={styles.iconButton}
                  />
                </View>
              </View>
            </View>
        );
    }
}

WelcomeScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators({ setUserKey }, dispatch)
    };
}

export default connect(null,mapDispatchToProps)(WelcomeScreen);
