import React, {Component, PropTypes} from 'react';
import {Modal, View, TextInput, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import { FireDB } from '../FirebaseApp';
import { setUserInfo } from '../actions/userActions';
import { bindActionCreators } from 'redux';
import Base64 from 'base-64';
import { FormLabel, FormInput, Button } from 'react-native-elements'

const styles = StyleSheet.create({
    container: {
        padding:10,
        flexDirection: 'column',
        justifyContent: 'center',
        flex:1
    },
    button: {
      paddingTop: 20
    }
});

class CompleteRegistrationModal extends Component{


    constructor(props,context){
        super(props,context);
        this.state = {
            userInfo: {
                screenName: ""
            },
            valid: false
        };

        this.registerUser = this.registerUser.bind(this);
        this.validateScreenName = this.validateScreenName.bind(this);
    }

    async registerUser(){
        FireDB.ref('users/' + this.props.userKey).set(this.state.userInfo).then(function(){
            this.props.actions.setUserInfo(this.state.userInfo);
        }.bind(this));
    }

    async verifyUniqueness(screenName){
        try{
            const body = {
                "query": {
                    "bool" : {
                        "must" : {
                            "query_string" : {
                                "query" : `${screenName}*`
                            }
                        }
                    }
                }
            };

            const response = await fetch('https://smoke-8808408.us-east-1.bonsaisearch.net/firebase/_search', {
                method: 'post',
                headers: {
                    'Authorization': 'Basic '+Base64.encode('xl3kjbor:dkkw3rr5t2eiy7t3')
                },
                body: JSON.stringify(body)
            });
            const matches = JSON.parse(response._bodyInit).hits.hits;
            if(matches.length > 0 && matches[0]._source.screenName.toUpperCase() === screenName.toUpperCase()){
                return false;
            }
            else{
                return true;
            }
        }
        catch(error){
            console.log("error",error);
        }
    }

    async validateScreenName(screenName){
        if(screenName.length < 4){
            this.setState({valid: false});
            return;
        }
        this.setState({valid: await this.verifyUniqueness(screenName)});
    }

    render(){
        return(
            <Modal animationType={"slide"}
                   transparent={false}
                   visible={this.props.visible}
                   onRequestClose={() => null}
            >
                <View style={styles.container}>
                  <View>
                    <FormLabel>Enter your username</FormLabel>
                    <FormInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => {
                            const userInfo = Object.assign({},this.state.userInfo, {screenName: text});
                            this.setState({userInfo});
                            this.validateScreenName(text);
                        }}
                        placeholder="Username"
                        value={this.state.screenName}
                    />
                  </View>
                  <View style={styles.button}>
                    <Button
                        title="START PLAYING"
                        backgroundColor="#2196f3"
                        onPress={this.registerUser}
                        disabled={!this.state.valid}
                    />
                  </View>
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
        userKey: state.userKey,
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators({ setUserInfo }, dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(CompleteRegistrationModal);
