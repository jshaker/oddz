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
import {getChallengeStatus, ROUND1_CHALLENGER,ROUND1_CHALLENGEE,ROUND2_CHALLENGER,ROUND2_CHALLENGEE, ROUND3_CHALLENGER, ROUND3_CHALLENGEE, ROUND4_CHALLENGER_FAILURE, ROUND4_CHALLENGEE_FAILURE, ROUND4_CHALLENGER_SUCCESS, ROUND4_CHALLENGEE_SUCCESS} from '../services/ChallengeStatusService';
import Round1ChallengeeScreen from '../challengeScreens/Round1ChallengeeScreen';
import Round1ChallengerScreen from '../challengeScreens/Round1ChallengerScreen';
import Round2ChallengeeScreen from '../challengeScreens/Round2ChallengeeScreen';
import Round2ChallengerScreen from '../challengeScreens/Round2ChallengerScreen';
import Round3ChallengeeScreen from '../challengeScreens/Round3ChallengeeScreen';
import Round3ChallengerScreen from '../challengeScreens/Round3ChallengerScreen';
import Round4ChallengerFailureScreen from '../challengeScreens/Round4ChallengerFailureScreen';
import Round4ChallengeeFailureScreen from '../challengeScreens/Round4ChallengeeFailureScreen';
import Round4ChallengerSuccessScreen from '../challengeScreens/Round4ChallengerSuccessScreen';
import Round4ChallengeeSuccessScreen from '../challengeScreens/Round4ChallengeeSuccessScreen';

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
        this.sendChallengeeGuess = this.sendChallengeeGuess.bind(this);
        this.clearChallenge = this.clearChallenge.bind(this);
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

    sendChallengeeGuess(challengerID){
        const {challengeeGuess} = this.state;
        FireDB.ref(`challenges/${challengerID}/${this.props.route.challengeID}`).update({challengeeGuess});
        FireDB.ref(`challenges/${this.props.userKey}/${this.props.route.challengeID}`).update({challengeeGuess});
    }

    clearChallenge(challenge){
        this.props.navigator.pop();
        FireDB.ref(`history/${this.props.userKey}/${this.props.route.challengeID}`).set(challenge);
        FireDB.ref(`challenges/${this.props.userKey}/${this.props.route.challengeID}`).set(null);
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
            case ROUND3_CHALLENGER:
                return Round3ChallengerScreen.call(this,{challenge});
            case ROUND3_CHALLENGEE:
                return Round3ChallengeeScreen.call(this,{challenge});
            case ROUND4_CHALLENGER_FAILURE:
                return Round4ChallengerFailureScreen.call(this,{challenge});
            case ROUND4_CHALLENGEE_FAILURE:
                return Round4ChallengeeFailureScreen.call(this,{challenge});
            case ROUND4_CHALLENGER_SUCCESS:
                return Round4ChallengerSuccessScreen.call(this,{challenge});
            case ROUND4_CHALLENGEE_SUCCESS:
                return Round4ChallengeeSuccessScreen.call(this,{challenge});
            default:
                return (<View><Text>An error has occured.</Text></View>);
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
