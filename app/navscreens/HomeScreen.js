import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import FirebaseApp from '../FirebaseApp';
import LandingScreen from '../landingscreens/LandingScreen';
import CompleteRegistrationModal from '../modals/CompleteRegistrationModal';
import { AddFriendsScreenNavigation, MyFriendsScreenNavigation, AcceptDeclineFriendScreenNavigation, ChallengeScreenNavigation, MyChallengesScreenNavigation } from './ScreenNavs';
import { Button, Icon } from 'react-native-elements'



const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        //backgroundColor:'#FFCCBC'
    },
    column:{
      flexDirection: 'column',
      justifyContent:'space-around',
      alignItems: 'center',
    },
    circleContainer:{
      width:150,
      height:150,
      borderRadius: 150/2,
      backgroundColor:'red',
      justifyContent:'center'
    },
    iconButton:{
      alignSelf:'center'
    },
    iconAndLabelContainer:{
      alignItems:'center',
      justifyContent:'center'
    },
    text:{
      color:'black'
    }
});

class HomeScreen extends Component{


    constructor(props,context){
        super(props,context);
        this.state = {
            userInfoModal: false
        };

        this.logout = this.logout.bind(this);
        this.redirectAddFriends = this.redirectAddFriends.bind(this);
        this.redirectMyFriends = this.redirectMyFriends.bind(this);
        this.redirectFriendRequests = this.redirectFriendRequests.bind(this);
        this.redirectChallenge = this.redirectChallenge.bind(this);
        this.redirectMyChallenges = this.redirectMyChallenges.bind(this);
    }

    async logout(){
        await FirebaseApp.auth().signOut();
        this.props.topLevelNavigator.replacePrevious({screen: LandingScreen});
        this.props.topLevelNavigator.popToTop(0);
    }

    redirectAddFriends(){
        this.props.navigator.push(AddFriendsScreenNavigation);
    }

    redirectMyFriends(){
        this.props.navigator.push(MyFriendsScreenNavigation);
    }

    redirectFriendRequests(){
        this.props.navigator.push(AcceptDeclineFriendScreenNavigation);
    }

    redirectChallenge(){
        this.props.navigator.push(ChallengeScreenNavigation);
    }

    redirectMyChallenges(){
        this.props.navigator.push(MyChallengesScreenNavigation);
    }

    render(){

        return(
            <View style={this.props.style}>
                <CompleteRegistrationModal visible={this.props.userInfo == null} />
                <View style={styles.mainContainer}>
                  <View style={styles.column}>
                    <View style={styles.iconAndLabelContainer}>
                      <Icon
                      reverse
                      raised
                      name='person-add'
                      type='ionicons'
                      color='#FF5252'
                      size={55}
                      style={styles.iconButton}
                      onPress={this.redirectAddFriends} />
                      <Text style={styles.text}>Add Friends</Text>
                      {/*<Button
                          raised
                          title="Add Friends"
                          color="white"
                          backgroundColor="transparent"
                          onPress={this.redirectAddFriends}
                      />*/}
                    </View>
                    <View style={styles.iconAndLabelContainer}>
                      <Icon
                      reverse
                      raised
                      name='users'
                      type='font-awesome'
                      color='#FF5252'
                      size={55}
                      style={styles.iconButton}
                      onPress={this.redirectMyFriends} />
                      <Text style={styles.text}>My Friends</Text>
                      {/*<Button
                          raised
                          title="My Friends"
                          color="white"
                          backgroundColor="transparent"
                          onPress={this.redirectMyFriends}
                      />*/}
                    </View>
                    <View style={styles.iconAndLabelContainer}>
                      <Icon
                      reverse
                      raised
                      name='envelope'
                      type='font-awesome'
                      color='#FF5252'
                      size={55}
                      style={styles.iconButton}
                      onPress={this.redirectFriendRequests} />
                      <Text style={styles.text}>Friend Requests</Text>
                      {/*<Button
                          raised
                          title="Friend Requests"
                          color="white"
                          backgroundColor="transparent"
                          onPress={this.redirectFriendRequests}
                      />*/}
                    </View>
                  </View>
                  <View style={styles.column}>
                    <View style={styles.iconAndLabelContainer}>
                      <Icon
                      reverse
                      raised
                      name='dice-6'
                      type='material-community'
                      color='#FF5252'
                      size={55}
                      style={styles.iconButton}
                      onPress={this.redirectChallenge} />
                      <Text style={styles.text}>Challenge</Text>
                      {/*<Button
                          raised
                          title="Challenge"
                          color="white"
                          backgroundColor="transparent"
                          onPress={this.redirectChallenge}
                      />*/}
                    </View>
                    <View style={styles.iconAndLabelContainer}>
                      <Icon
                      reverse
                      raised
                      name='trophy'
                      type='font-awesome'
                      color='#FF5252'
                      size={55}
                      style={styles.iconButton}
                      onPress={this.redirectMyChallenges} />
                      <Text style={styles.text}>My Challenges</Text>
                      {/*<Button
                          raised
                          title="View My Challenges"
                          color="white"
                          backgroundColor="transparent"
                          onPress={this.redirectMyChallenges}
                      />*/}
                    </View>
                    <View style={styles.iconAndLabelContainer}>
                      <Icon
                      reverse
                      raised
                      name='cogs'
                      type='font-awesome'
                      color='#FF5252'
                      size={55}
                      style={styles.iconButton}
                      onPress={this.logout} />
                      <Text style={styles.text}>Settings</Text>
                      {/*<Button
                          raised
                          title="Settings"
                          color="white"
                          backgroundColor="transparent"
                          onPress={this.logout}
                      />*/}
                    </View>
                  </View>
                </View>
            </View>
        );
    }
}


HomeScreen.propTypes = {
    navigator: PropTypes.object.isRequired,
    topLevelNavigator: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps){
    return {
        userInfo: state.userInfo
    };
}

export default connect(mapStateToProps)(HomeScreen);
