import React, { Component } from 'react';
import LandingScreen from './screens/LandingScreen';
import { Navigator, View, Text } from 'react-native';

export default class App extends Component {
    render() {
        return (
            <Navigator initialRoute={{ screen: LandingScreen }}
                       renderScene={(route,navigator) => {
                           const Screen = route.screen;
                           return (
                              <Screen navigator={navigator} />
                           );
                       }}
            />
        );
    }
}
