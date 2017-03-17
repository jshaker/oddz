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
import {getChallengeStatus, ROUND1_CHALLENGER,ROUND1_CHALLENGEE,ROUND2_CHALLENGER,ROUND2_CHALLENGEE} from '../services/ChallengeStatusService';
import Round1ChallengeeScreen from '../challengeScreens/Round1ChallengeeScreen';
import Round1ChallengerScreen from '../challengeScreens/Round1ChallengerScreen';
import Round2ChallengeeScreen from '../challengeScreens/Round2ChallengeeScreen';
import Round2ChallengerScreen from '../challengeScreens/Round2ChallengerScreen';

class DetailedChallengeScreen extends Component {

    constructor(props,context){
        super(props,context);

        this.state = {
            oddzTotal: '',
            challengerGuess: '',
            challengeeGuess: ''
        };

        this.rejectChallenge = this.rejectChallenge.bind(this);
        this.acceptChallenge = this.acceptChallenge.bind(this);
        this.sendChallengerGuess = this.sendChallengerGuess.bind(this);
    }


    rejectChallenge(challengerID){
        FireDB.ref(`challenges/${this.props.userKey}/${this.props.route.challengeID}`).set(null);
        FireDB.ref(`challenges/${challengerID}/${this.props.route.challengeID}`).set(null);
    }

    acceptChallenge(challengerID){
        const {oddzTotal} = this.state;
        FireDB.ref(`challenges/${challengerID}/${this.props.route.challengeID}`).update({oddzTotal});
        FireDB.ref(`challenges/${this.props.userKey}/${this.props.route.challengeID}`).update({oddzTotal});
    }

    sendChallengerGuess(challengeeID){
        const {challengerGuess} = this.state;
        FireDB.ref(`challenges/${challengeeID}/${this.props.route.challengeID}`).update({challengerGuess});
        FireDB.ref(`challenges/${this.props.userKey}/${this.props.route.challengeID}`).update({challengerGuess});
    }

    render() {
        const challenge = this.props.challengesList[this.props.route.challengeID];

        switch(getChallengeStatus(challenge)){
            case ROUND1_CHALLENGER:
                return Round1ChallengerScreen.call(this,{challenge});
            case ROUND1_CHALLENGEE:
                return Round1ChallengeeScreen.call(this,{challenge});
            case ROUND2_CHALLENGER:
                return Round2ChallengerScreen.call(this,{challenge});
            case ROUND2_CHALLENGEE:
                return Round2ChallengeeScreen.call(this,{challenge});
            default:
                return <View></View>
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
