import React, { Component, PropTypes } from 'react';
import { View, Text} from 'react-native';
import {connect} from 'react-redux';
import NavApp from '../NavApp';
import { bindActionCreators } from 'redux';
import { setUserInfo } from '../actions/userActions';
import { FireDB } from '../FirebaseApp';

class WelcomeScreen extends Component {


    constructor(props,context){
        super(props,context);
    }

    componentDidMount(){
    }

    render() {

        return (
            <View style={this.props.style}>
                <Text>OddZ</Text>
            </View>
        );
    }
}

WelcomeScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators({ setUserInfo }, dispatch)
    };
}

export default connect(null,mapDispatchToProps)(WelcomeScreen);