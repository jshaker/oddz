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

