import React from 'react';
import {
    Text,
    View,
    ListView,
    Button,
    TextInput
} from 'react-native';
import {validateGuess} from '../services/OddzValidationService';

export default function(props){
    return (
        <View style={this.props.style}>
            <Text>{props.challenge.title}</Text>
            <Text>{props.challenge.description}</Text>
            <Text>Total Oddz: {props.challenge.oddzTotal}</Text>
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(challengeeGuess) => this.setState({challengeeGuess})}
                value={this.state.challengerGuess}
                keyboardType='numeric'
            />
            <Button
                onPress={function(){
                        this.sendChallengeeGuess(props.challenge.challengerID);
                    }.bind(this)}
                title="guess"
                disabled={!validateGuess(this.state.challengeeGuess,props.challenge.oddzTotal)}
                color="#841584"
            />
        </View>
    );
}