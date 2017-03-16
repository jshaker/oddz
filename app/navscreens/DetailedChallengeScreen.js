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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop: 100
    },
    row: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between'
    }
});

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class DetailedChallengeScreen extends Component {

    constructor(props,context){
        super(props,context);

        this.state = {
          oddz: ''
        };

        this.requestsRef = null;
        this.listener = null;
        this.listenerChildRemoved = null;
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
        return (
            <View style={styles.container}>
              <Text>Title: {this.props.route.challengeTitle}</Text>
              <Text>Description: {this.props.route.challengeDescription}</Text>
              <Text>Oddz Number: </Text>
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(oddz) => this.setState({oddz})}
                value={this.state.oddz}
              />
              <Button
                onPress={function(){
                  this.acceptChallenge(this.props.route.challengeID, this.props.route.challengerID)
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
                  this.rejectChallenge(this.props.route.challengeID, this.props.userKey, this.props.route.challengerID)
                  this.props.navigator.pop();
                }.bind(this)}
              />
            </View>

        );
    }
}

DetailedChallengeScreen.propTypes = {
    navigator: PropTypes.object.isRequired,
    topLevelNavigator: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps){
    return {
        userKey: state.userKey,
    };
}

export default connect(mapStateToProps)(DetailedChallengeScreen);
