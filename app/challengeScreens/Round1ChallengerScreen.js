import React from 'react';
import {
    Text,
    View,
    ListView,
    Button,
    TextInput,
    StyleSheet
} from 'react-native';
import { FormLabel } from 'react-native-elements'

const styles = StyleSheet.create({
    container: {
        padding:0,
        flexDirection: 'column',
        justifyContent: 'space-around',
        flex:1,
        //alignItems:'center'
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
              <Text style={{marginLeft: 20}}>{props.challenge.description}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text>Waiting on your opponent to select oddz range...</Text>
            </View>
          </View>
        </View>
    );
}
