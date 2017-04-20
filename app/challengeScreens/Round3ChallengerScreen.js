import React from 'react';
import {
    Text,
    View,
    ListView,
    StyleSheet,
    TextInput
} from 'react-native';
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
    },
    oddzContainer:{
      alignItems:'center',
      justifyContent:'center'
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
            <View style={styles.oddzContainer}>
              <View>
                <FormLabel>Total Oddz</FormLabel>
                <Text style={{alignSelf:'center'}}>{props.challenge.oddzTotal}</Text>
              </View>
              <View>
                <FormLabel>Your Guess</FormLabel>
                <Text style={{alignSelf:'center'}}>{props.challenge.challengerGuess}</Text>
              </View>
            </View>
            <View>
              <Text style={{alignSelf:'center'}}>Waiting on your opponent...</Text>
            </View>
          </View>
        </View>
    );
}
