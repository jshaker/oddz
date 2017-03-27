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
            <Text>You both guessed {props.challenge.challengeeGuess}!</Text>
            <Text>Congratulations! Make sure your friend doesn't back out of this one!</Text>
            <Button
                onPress={function(){
                this.clearChallenge(props.challenge);
            }.bind(this)}
                title="complete"
                color="#841584"
            />
        </View>
    );
}