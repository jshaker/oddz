import React, { Component, PropTypes } from 'react';
import { View, Text} from 'react-native';
import {connect} from 'react-redux';
import NavApp from '../NavApp';
import { bindActionCreators } from 'redux';
import { setUserInfo } from '../actions/userActions';
import { FireDB } from '../FirebaseApp';

class LoadingScreen extends Component {


    constructor(props,context){
        super(props,context);
        this.loadUserInfo = this.loadUserInfo.bind(this);
    }

    async loadUserInfo(){
        const userRef = await FireDB.ref('users/' + this.props.userKey);
        userRef.once('value', function(data){
            this.props.actions.setUserInfo(data.val());
            this.props.navigator.push({screen: NavApp});
        }.bind(this));
    }

    componentDidMount(){
        this.loadUserInfo();
    }

    render() {

        return (
            <View>
                <Text>Loading</Text>
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