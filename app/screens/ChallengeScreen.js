import React, { Component, PropTypes } from 'react';
import FirebaseApp, { FireDB } from '../FirebaseApp';
import Base64 from 'base-64';
import {StyleSheet,Text,View,Button,TextInput, Modal, TouchableHighlight} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding:10
    },
    titleInput:{
        height: 40,
        borderColor: 'black',
        borderWidth: 1
    },
    descriptionInput:{
        height: 120,
        borderColor: 'blue',
        borderWidth: 1
      }
});

class ChallengeScreen extends Component {

    constructor(props) {
    super(props);
      this.state = {
        title: '',
        description:'',
        challengerID:'',
        challengeeID:'',
        modalVisible: false,
      };

    }

  render() {
    return (
      <View style={this.props.style}>
        <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}
            >
           <View style={{marginTop: 22}}>
            <View>
              <Text>Test</Text>

              <TouchableHighlight onPress={() => {
                this.setState({modalVisible: false})
              }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>

            </View>
           </View>
          </Modal>
          <View style={styles.container}>
            <Text> Title </Text>
            <TextInput
              style={styles.titleInput}
              onChangeText={(title) => this.setState({title})}
              value={this.state.title}
            />
            <Text> Description </Text>
            <TextInput
              style={styles.descriptionInput}
              multiline = {true}
              numberOfLines = {4}
              onChangeText={(description) => this.setState({description})}
              value={this.state.description}
            />
            <Button
              onPress={() => {
                this.setState({modalVisible: true})
              }}
              title="Challenge Friend!"
              color="#841584"
              accessibilityLabel="Pick a friend to challenge"
            />
          </View>
      </View>
    );
  }
}

ChallengeScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};

export default ChallengeScreen;
