import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { FireDB } from '../FirebaseApp';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Button,
    TextInput
} from 'react-native';

class DetailedChallengeScreen extends Component {

    constructor(props,context){
        super(props,context);

        this.state = {
            oddz: ''
        };

        this.rejectChallenge = this.rejectChallenge.bind(this);
        this.acceptChallenge = this.acceptChallenge.bind(this);
    }


    async rejectChallenge(challengeID, challengerID, challengeeID){
        FireDB.ref(`challenges/${challengeeID}/${challengeID}`).set(null);
        return FireDB.ref(`challenges/${challengerID}/${challengeID}`).set(null);
    }

    async acceptChallenge(challengeID, challengerID){
        FireDB.ref(`challenges/${challengerID}/${challengeID}`).update({oddzTotal:this.state.oddz});
        return FireDB.ref(`challenges/${this.props.userKey}/${challengeID}`).update({oddzTotal:this.state.oddz});
    }

    render() {
        const challenge = this.props.challengesList[this.props.route.challengeID];
        const isChallenger = typeof challenge.challengerID === "undefined";

        if(challenge.oddzTotal){
            if(isChallenger){
                return (
                    <View style={this.props.style}>
                        <Text>Enter your guess between 0 and {challenge.oddzTotal}</Text>
                    </View>
                );
            }
            else{
                return (
                  <View style={this.props.style}>
                      <Text>Waiting on the Challenger to guess a number.</Text>
                  </View>
                );
            }
        }
        else{
            if(isChallenger){
                return (
                    <View style={this.props.style}>
                        <Text>Waiting on Challengee to choose his oddz.</Text>
                    </View>
                );
            }
            else{
                return (
                    <View style={this.props.style}>
                        <Text>Title: {challenge.title}</Text>
                        <Text>Description: {challenge.description}</Text>
                        <Text>Oddz Number: </Text>
                        <TextInput
                            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            onChangeText={(oddz) => this.setState({oddz})}
                            value={this.state.oddz}
                        />
                        <Button
                            onPress={function(){
                        this.acceptChallenge(this.props.route.challengeID, challenge.challengerID);
                    }.bind(this)}
                            title="accept"
                            disabled={this.state.oddz === ''}
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                        />
                        <Button
                            title="decline"
                            color="red"
                            onPress={function(){
                        this.rejectChallenge(this.props.route.challengeID, this.props.userKey, challenge.challengerID);
                        this.props.navigator.pop();
                    }.bind(this)}
                        />
                    </View>
                );
            }
        }
    }
}

DetailedChallengeScreen.propTypes = {
    navigator: PropTypes.object.isRequired,
    topLevelNavigator: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps){
    return {
        userKey: state.userKey,
        challengesList: state.challengesList
    };
}

export default connect(mapStateToProps)(DetailedChallengeScreen);
