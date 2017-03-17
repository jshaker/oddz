import React from 'react';
import {
    Text,
    View,
    ListView,
    Button,
    TextInput
} from 'react-native';

export default function(props){
    return (
        <View style={this.props.style}>
            <Text>Enter your guess between 0 and {props.challenge.oddzTotal}</Text>
        </View>
    );
}