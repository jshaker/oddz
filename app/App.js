import React, { Component } from 'react';
import LandingScreen from './landingscreens/LandingScreen';
import { Navigator, View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    }
});

const store = configureStore();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
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
            </Provider>
        );
    }
}
