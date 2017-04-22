import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import LandingScreen from './LandingScreen';
import NavApp from '../NavApp';
import { bindActionCreators } from 'redux';
import { setUserInfo } from '../actions/userActions';
import { FireDB } from '../FirebaseApp';
import { Icon } from 'react-native-elements';
import Spinner from 'react-native-spinkit';

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
    }
});

class LoadingScreen extends Component {


    constructor(props,context){
        super(props,context);
        this.loadUserInfo = this.loadUserInfo.bind(this);
    }

    async loadUserInfo(){
        const firstDate = new Date();
        const userRef = await FireDB.ref('users/' + this.props.userKey);
        userRef.once('value', function(data){
            const timeElapsed = new Date() - firstDate;
            let timeout = 0;
            if(timeElapsed < 2000){
                timeout = 2000 - timeElapsed;
            }
            setTimeout(function(){
                this.props.actions.setUserInfo(data.val());
                this.props.navigator.push({screen: NavApp});
                this.props.navigator.replaceAtIndex({screen: LandingScreen},0);
            }.bind(this), timeout);
        }.bind(this));
    }

    componentDidMount(){
        this.loadUserInfo();
    }

    render() {

        return (
            <View style={this.props.style}>
              <View style={styles.container}>
                <Text style={{color:'white', alignSelf:'center', fontSize:24}}>Loading...</Text>
              </View>
            </View>
        );
    }
}

LoadingScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps){
    return {
        userKey: state.userKey
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators({ setUserInfo }, dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(LoadingScreen);
