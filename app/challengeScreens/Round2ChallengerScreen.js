import React from 'react';
import {
    Text,
    View,
    ListView,
    Button,
    TextInput
} from 'react-native';
import {validateGuess} from '../services/oddzValidation';

export default function(props){
    return (
        <View style={this.props.style}>
            <Text>Title: {props.challenge.title}</Text>
            <Text>Description: {props.challenge.description}</Text>
            <Text>Oddz Number: {props.challenge.oddzTotal}</Text>
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(challengerGuess) => this.setState({challengerGuess})}
                value={this.state.challengerGuess}
                keyboardType='numeric'
            />
            <Button
                onPress={function(){
                        this.sendChallengerGuess(props.challenge.challengeeID);
                    }.bind(this)}
                title="guess"
                disabled={!validateGuess(this.state.challengerGuess,props.challenge.oddzTotal)}
                color="#841584"
            />
        </View>
    );
}