import React from 'react';
import {
    Text,
    View,
    ListView,
    Button,
    TextInput
} from 'react-native';
import {isPositiveInt} from '../services/oddzValidation';

export default function(props){
    return (
        <View style={this.props.style}>
            <Text>Title: {props.challenge.title}</Text>
            <Text>Description: {props.challenge.description}</Text>
            <Text>Oddz Number: </Text>
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(oddzTotal) => this.setState({oddzTotal})}
                value={this.state.oddzTotal}
                keyboardType='number-pad'
            />
            <Button
                onPress={function(){
                        this.acceptChallenge(props.challenge.challengerID);
                    }.bind(this)}
                title="accept"
                disabled={!isPositiveInt(this.state.oddzTotal)}
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                title="decline"
                color="red"
                onPress={function(){
                        this.rejectChallenge(props.challenge.challengerID);
                        this.props.navigator.pop();
                    }.bind(this)}
            />
        </View>
    );
}