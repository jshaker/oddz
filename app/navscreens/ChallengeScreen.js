import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { FireDB } from '../FirebaseApp';
import {StyleSheet,Text,View,TextInput, Modal, TouchableHighlight} from 'react-native';
import FindFriendModal from '../modals/FindFriendModal';
import {DetailedChallengeScreenNavigation} from './ScreenNavs';
import { FormLabel, FormInput, Button } from 'react-native-elements'

const styles = StyleSheet.create({
    container: {
        padding:10,
        flexDirection: 'column',
        justifyContent: 'space-around',
        flex:1
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
        this.closeModal = this.closeModal.bind(this);
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
        FireDB.ref().update(updates).then(function(){
            const challengeDetailsScreen = Object.assign({},DetailedChallengeScreenNavigation, {challengeID: challengeKey});
            this.props.navigator.replace(challengeDetailsScreen);
        }.bind(this));
    }

    handleTouch(data){
        this.setState({modalVisible: false, challengeeID: data, challengerID: this.props.userKey});
    }

    closeModal(){
        this.setState({modalVisible: false});
    }

    render() {
        return (
            <View style={this.props.style}>
                <FindFriendModal visible={this.state.modalVisible}
                                 handleTouch={this.handleTouch}
                                 closeModal={this.closeModal}
                />
                <View style={styles.container}>
                  <View>
                    <FormLabel> Title </FormLabel>
                    <FormInput
                        //style={styles.titleInput}
                        onChangeText={(title) => this.setState({title})}
                        value={this.state.title}
                    />
                    <FormLabel> Description </FormLabel>
                    <FormInput
                        style={styles.descriptionInput}
                        multiline = {true}
                        numberOfLines = {10}
                        onChangeText={(description) => this.setState({description})}
                        value={this.state.description}
                    />
                    <FormLabel> Friend Challenged: {this.state.challengeeID} </FormLabel>
                  </View>
                  <View>
                    <Button
                      large
                      iconLeft
                      icon={{name: 'accessibility'}}
                      backgroundColor='#2196f3'
                      title='SELECT FRIEND'
                      onPress={() => {
                        this.setState({modalVisible: true})
                      }} />
                    <Button
                      large
                      iconLeft
                      icon={{name: 'dice-6', type:'material-community'}}
                      backgroundColor='#ff5252'
                      title='SEND CHALLENGE'
                      disabled={!this.state.challengeeID || !this.state.title || !this.state.description}
                      onPress={() => {
                        this.sendChallenge(this.state)
                      }} />
                  </View>
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
        userKey: state.userKey
    };
}

export default connect(mapStateToProps)(ChallengeScreen);
