import React from 'react';
import {
    Text,
    View,
    ListView,
    TextInput,
    StyleSheet
} from 'react-native';
import {isPositiveInt} from '../services/OddzValidationService';
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
              <FormLabel>Oddz Number: </FormLabel>
              <FormInput
                  style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                  onChangeText={(oddzTotal) => this.setState({oddzTotal})}
                  value={this.state.oddzTotal}
                  keyboardType='number-pad'
              />
            </View>
            <View>
              <Button
                  medium
                  onPress={function(){
                          this.acceptChallenge(props.challenge.challengerID);
                      }.bind(this)}
                  title="ACCEPT"
                  disabled={!isPositiveInt(this.state.oddzTotal)}
                  color="white"
                  backgroundColor='#2196f3'
              />
              <Button
                  medium
                  title="DECLINE"
                  color="white"
                  backgroundColor='#ff5252'
                  onPress={function(){
                          this.rejectChallenge(props.challenge.challengerID);
                          this.props.navigator.pop();
                      }.bind(this)}
              />
            </View>
          </View>
        </View>
    );
}
