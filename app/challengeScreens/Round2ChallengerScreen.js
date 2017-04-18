import React from 'react';
import {
    Text,
    View,
    ListView,
    StyleSheet,
    TextInput
} from 'react-native';
import {validateGuess} from '../services/OddzValidationService';
import { FormLabel, FormInput, Button } from 'react-native-elements'

const styles = StyleSheet.create({
    container: {
        padding:10,
        flexDirection: 'column',
        justifyContent: 'space-around',
        flex:1
    },
    textContainer:{
      alignItems:'center'
    }
});

export default function(props){
    return (
        <View style={this.props.style}>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <FormLabel>{props.challenge.title}</FormLabel>
            </View>
            <View>
              <FormLabel>Description</FormLabel>
              <Text style={{marginLeft:20}}>{props.challenge.description}</Text>
            </View>
            <View>
              <FormLabel>Total Oddz: {props.challenge.oddzTotal}</FormLabel>
              <FormInput
                  style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                  onChangeText={(challengerGuess) => this.setState({challengerGuess})}
                  value={this.state.challengerGuess}
                  keyboardType='numeric'
              />
            </View>
            <Button
                medium
                onPress={function(){
                        this.sendChallengerGuess(props.challenge.challengeeID);
                    }.bind(this)}
                title="GUESS"
                disabled={!validateGuess(this.state.challengerGuess,props.challenge.oddzTotal)}
                color="white"
                backgroundColor='#2196f3'
            />
          </View>
        </View>
    );
}
