import React, { Component, PropTypes } from 'react';
import { FireDB } from '../FirebaseApp';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Navigator
} from 'react-native';

class AddFriendsScreen extends Component {

    constructor(props,context){
        super(props,context);
        this.state = {
            users: []
        };
        this.goBack = this.goBack.bind(this);
    }

    componentWillMount(){
        this.search();
    }

    async search(){
        try{
            const body = {
                q: "*bubba"
            };

            const result = await fetch("https://xl3kjbor:dkkw3rr5t2eiy7t3@smoke-8808408.us-east-1.bonsaisearch.net/firebase/_search", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log("result",result);
        }
        catch(error){
            console.log("error",error);
        }

    }

    goBack(){
        this.props.navigator.pop();
    }

    render() {
        return (
            <View>
                <Text>
                    Add Friendz
                </Text>
                <Button
                    title="Back"
                    color="#e0e0e0"
                    onPress={this.goBack}
                />
            </View>
        );
    }
}

AddFriendsScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};

export default AddFriendsScreen;

