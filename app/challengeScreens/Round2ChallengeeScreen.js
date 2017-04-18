import React from 'react';
import {
    Text,
    View,
    ListView,
    TextInput,
    StyleSheet
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
                  onChangeText={(challengeeGuess) => this.setState({challengeeGuess})}
                  value={this.state.challengeeGuess}
                  keyboardType='numeric'
              />
            </View>
            <View>
              <Button
                  medium
                  onPress={function(){
                          this.sendChallengeeGuess(props.challenge.challengerID);
                      }.bind(this)}
                  title="GUESS"
                  disabled={!validateGuess(this.state.challengeeGuess,props.challenge.oddzTotal)}
                  color="white"
                  backgroundColor="#2196f3"
              />
            </View>
          </View>
        </View>
    );
}
