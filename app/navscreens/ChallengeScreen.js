import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { FireDB } from '../FirebaseApp';
import {StyleSheet,Text,View,Button,TextInput, Modal, TouchableHighlight} from 'react-native';
import FindFriendModal from '../modals/FindFriendModal';

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

        this.handleTouch = this.handleTouch.bind(this);
        this.sendChallenge = this.sendChallenge.bind(this);
    }

    async sendChallenge(data){
        const challengeKey = await FireDB.ref(`challenges/${data.challengerID}`).push().key;
        const challengerData = {
            title: data.title,
            description: data.description,
            challengerID: data.challengerID
        };
        const challengeeData = {
            title: data.title,
            description: data.description,
            challengeeID: data.challengeeID
        };
        const updates = {};
        updates[`challenges/${data.challengerID}/${challengeKey}`] = challengeeData;
        updates[`challenges/${data.challengeeID}/${challengeKey}`] = challengerData;
        return FireDB.ref().update(updates);
    }

    handleTouch(data){
        this.setState({modalVisible: false, challengeeID: data, challengerID: this.props.userInfo.key});
    }

    render() {
        return (
            <View style={this.props.style}>
                <FindFriendModal visible={this.state.modalVisible} handleTouch={this.handleTouch} />
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
                    <Text> Friend Challenged: {this.state.challengeeID} </Text>
                    <Button
                        onPress={() => {
                this.setState({modalVisible: true})
              }}
                        title="Challenge Friend!"
                        color="#841584"
                        accessibilityLabel="Pick a friend to challenge"
                    />
                    <Button
                        onPress={() => {
                this.sendChallenge(this.state)
              }}
                        title="Send Challenge!"
                        color="blue"
                        accessibilityLabel="Send Challenge"
                    />
                </View>
            </View>
        );
    }
}

ChallengeScreen.propTypes = {
    navigator: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps){
    return {
        userInfo: state.userInfo
    };
}

export default connect(mapStateToProps)(ChallengeScreen);
