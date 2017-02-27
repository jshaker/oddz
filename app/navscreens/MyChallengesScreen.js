import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { FireDB } from '../FirebaseApp';
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

        this.requestsRef = null;
        this.listener = null;
        this.listenerChildRemoved = null;

        //this.goBack = this.goBack.bind(this);
        this.renderRow = this.renderRow.bind(this);
        // this.listenChallengeRequests = this.listenChallengeRequests.bind(this);
        // this.unlistenChallengeRequests = this.unlistenChallengeRequests.bind(this);
        // this.acceptChallenge = this.acceptChallenge.bind(this);
        // this.rejectChallenge = this.rejectChallenge.bind(this);
    }

    renderRow(rowData){
      if(rowData.challengeInfo.challengerID){
        return (
            <View style={styles.row}>
                <Text>Challenged!</Text>
                <Text>{rowData.challengeInfo.title}</Text>
                <Button
                    title="accept"
                    color="#2196f3"
                    onPress={function(){
                    //TODO
                  }.bind(this)}
                />
                <Button
                    title="decline"
                    color="red"
                    onPress={function(){
                    //TODO
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
                    title="Check Challenge Status"
                    color="#2196f3"
                    onPress={function(){
                    //TODO
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
    //keeping for reference TODO accept and reject challenges

    // goBack(){
    //     this.props.navigator.pop();
    // }

    // async listenChallengeRequests(){
    //     this.requestsRef = FireDB.ref('challenges/' + this.props.userKey);
    //     this.listener = this.requestsRef.on('child_added', function(snapshot) {
    //         const requestList = [...this.state.challengeRequests, {id: snapshot.key, screenName: snapshot.val().screenName}]
    //         this.setState({challengeRequests: requestList})
    //     }.bind(this));
    //     this.listenerChildRemoved = this.requestsRef.on('child_removed', function(snapshot) {
    //         const requestList = [...this.state.friendRequests]
    //         for(var i=0; i<requestList.length; i++){
    //             if(requestList[i].id == snapshot.key){
    //                 requestList.splice(i, 1);
    //                 break;
    //             }
    //         }
    //         this.setState({friendRequests: requestList})
    //     }.bind(this));
    // }
    //
    // unlistenFriendRequests(){
    //     this.requestsRef.off('child_added',this.listener);
    //     this.requestsRef.off('child_removed',this.listenerChildRemoved);
    // }

    // async acceptFriend(friendID, friendName){
    //
    //     FireDB.ref(`friends/${friendID}/${this.props.userKey}`).set(this.props.userInfo);
    //     FireDB.ref(`friends/${this.props.userKey}/${friendID}`).set(friendName);
    //     return FireDB.ref(`friendRequests/${this.props.userKey}/${friendID}`).set(null);
    // }
    //
    // async rejectFriend(friendID, friendName){
    //     return FireDB.ref(`friendRequests/${this.props.userKey}/${friendID}`).set(null);
    // }



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
