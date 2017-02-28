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
        this.renderRow = this.renderRow.bind(this);
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
