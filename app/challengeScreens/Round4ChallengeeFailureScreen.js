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
            <Text>{props.challenge.title}</Text>
            <Text>{props.challenge.description}</Text>
            <Text>Total Oddz: {props.challenge.oddzTotal}</Text>
            <Text>Your Guess: {props.challenge.challengeeGuess}</Text>
            <Text>Challenger's guess: {props.challenge.challengerGuess}</Text>
            <Text>You survive another round!</Text>
            <Button
                onPress={function(){
                    this.clearChallenge(props.challenge);
                }.bind(this)}
                title="clear"
                color="#841584"
            />
        </View>
    );
}