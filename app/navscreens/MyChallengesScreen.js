import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { FireDB } from '../FirebaseApp';
import {DetailedChallengeScreenNavigation} from '././ScreenNavs';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Button
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    row: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between'
    }
});

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class MyChallengesScreen extends Component {

    constructor(props,context){
        super(props,context);

        this.renderRow = this.renderRow.bind(this);
        this.rejectChallenge = this.rejectChallenge.bind(this);
        this.redirectDetailedChallengeScreen = this.redirectDetailedChallengeScreen.bind(this);
    }

    renderRow(rowData){
        if(rowData.challengeInfo.challengerID){
            return (
                <View style={styles.row}>
                    <Text>Challenged!</Text>
                    <Text>{rowData.challengeInfo.title}</Text>
                    <Button
                        title="Details"
                        color="#2196f3"
                        onPress={function(){
                      this.redirectDetailedChallengeScreen(rowData);
                    }.bind(this)}
                    />
                </View>
            );
        }
        else{
            return (
                <View style={styles.row}>
                    <Text>Your Challenge:</Text>
                    <Text>{rowData.challengeInfo.title}</Text>
                    <Button
                        title="Details"
                        color="#2196f3"
                        onPress={function(){
                      this.redirectDetailedChallengeScreen(rowData);
                    }.bind(this)}
                    />
                </View>
            );
        }
    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted){
        return (
            <View
                key={`${sectionID}-${rowID}`}
                style={{
                height: adjacentRowHighlighted ? 4 : 1,
                backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC'
              }}
            />
        );
    }

    redirectDetailedChallengeScreen(rowData){
        const challengeDetailsScreen = Object.assign({},DetailedChallengeScreenNavigation, {challengeID: rowData.id});
        this.props.navigator.push(challengeDetailsScreen);
    }

    async rejectChallenge(challengeID, challengerID, challengeeID){
        FireDB.ref(`challenges/${challengeeID}/${challengeID}`).set(null);
        return FireDB.ref(`challenges/${challengerID}/${challengeID}`).set(null);
    }

    render() {

        const challengesList = Object.keys(this.props.challengesList).map(function(id){
            return {id, challengeInfo: this.props.challengesList[id]};
        }.bind(this));

        return (
            <ListView
                dataSource={ds.cloneWithRows(challengesList)}
                renderRow={this.renderRow}
                renderSeparator={this.renderSeparator}
                style={this.props.style}
                enableEmptySections
            />
        );
    }
}

MyChallengesScreen.propTypes = {
    navigator: PropTypes.object.isRequired,
    topLevelNavigator: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps){
    return {
        userKey: state.userKey,
        userInfo: state.userInfo,
        challengesList: state.challengesList,
        friendsList: state.friendsList
    };
}

export default connect(mapStateToProps)(MyChallengesScreen);
