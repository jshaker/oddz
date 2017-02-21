import React, {Component, PropTypes} from 'react';
import {Modal, View, TextInput, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUserInfo } from '../actions/userActions';
import FirebaseApp, { FireDB } from '../FirebaseApp';

class CompleteRegistrationModal extends Component{


    constructor(props,context){
        super(props,context);
        this.state = {
            screenName: ""
        };

        this.registerUser = this.registerUser.bind(this);
    }

    async registerUser(){
        const currentUserId = await FirebaseApp.auth().currentUser.uid;
        FireDB.ref('users/' + currentUserId).set(this.state).then(function(){
            const userInfo = Object.assign({},this.state, {key: currentUserId});
            this.props.actions.setUserInfo(userInfo);
        }.bind(this), function(error){
            console.log("fuck",error);
        });
    }

    render(){
        return(
            <Modal animationType={"slide"}
                   transparent={false}
                   visible={this.props.visible}
                   onRequestClose={() => null}
            >
                <View>
                    <Text>Enter your information</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({screenName: text})}
                        placeholder="Screen Name"
                        value={this.state.screenName}
                    />
                    <Button
                        title="Create User"
                        color="#e0e0e0"
                        onPress={this.registerUser}
                    />
                </View>
            </Modal>
        );
    }
}


CompleteRegistrationModal.propTypes = {
    visible: PropTypes.bool
};

function mapStateToProps(state, ownProps){
    return {
        userInfo: state.userInfo
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators({ setUserInfo }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompleteRegistrationModal);
