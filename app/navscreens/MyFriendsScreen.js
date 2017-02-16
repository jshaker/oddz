import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, ListView, Button} from 'react-native';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between'
    }
});

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class MyFriendsScreen extends Component{


    constructor(props,context){
        super(props,context);

        this.renderRow = this.renderRow.bind(this);
        this.viewUserInfo = this.viewUserInfo.bind(this);
    }

    viewUserInfo(userId){

    }

    renderRow(rowData){
        return (
            <View style={styles.row}>
                <Text>{rowData.userInfo}</Text>
                <Button
                    title=">"
                    color="#2196f3"
                    onPress={function(){
                        this.viewUserInfo(rowData.key);
                    }.bind(this)}
                />
            </View>
        );
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

    render(){
        const friendsList = Object.keys(this.props.friendsList).map(function(id){
            return {id, userInfo: this.props.friendsList[id]};
        }.bind(this));

        return(
            <View style={this.props.style}>
                <ListView
                    dataSource={ds.cloneWithRows(friendsList)}
                    renderRow={this.renderRow}
                    renderSeparator={this.renderSeparator}
                    enableEmptySections
                />
            </View>
        );
    }
}


MyFriendsScreen.propTypes = {
    navigator: PropTypes.object.isRequired,
    topLevelNavigator: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        friendsList: state.friendsList
    };
}

export default connect(mapStateToProps,null)(MyFriendsScreen);
