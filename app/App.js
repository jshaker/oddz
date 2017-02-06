import React, { Component } from 'react';
import LandingScreen from './landingscreens/LandingScreen';
import { Navigator, View, Text, TouchableHighlight, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    }
});

export default class App extends Component {
    render() {
        return (
            <Navigator initialRoute={{screen: LandingScreen}}
                       renderScene={(route,navigator) => {
                           const Screen = route.screen;
                           return (
                              <Screen navigator={navigator}
                                      style={styles.screen}
                              />
                           );
                       }}
            />
        );
    }
}
