import React, { Component } from 'react';
import {LandingScreenNavigation} from './screens/ScreenNavs';
import { Navigator, View, Text, TouchableHighlight, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    screen: {
        paddingTop: 70,
        flex: 1,
        backgroundColor: '#F5FCFF'
    }
});

export default class App extends Component {
    render() {
        return (
            <Navigator initialRoute={LandingScreenNavigation}
                       renderScene={(route,navigator) => {
                           const Screen = route.screen;
                           return (
                              <Screen navigator={navigator}
                                      style={styles.screen}
                              />
                           );
                       }}
                       navigationBar={
                           <Navigator.NavigationBar
                            routeMapper={{
                               LeftButton: (route, navigator, index, navState) =>
                                {
                                    if (route.showBackButton) {
                                      return (
                                        <TouchableHighlight onPress={() => navigator.pop()}>
                                          <Text>Back</Text>
                                        </TouchableHighlight>
                                      );
                                    } else {
                                      return null;
                                    }
                                },
                               RightButton: (route, navigator, index, navState) =>
                                 { return null; },
                               Title: (route, navigator, index, navState) =>
                                 { return (<Text>{route.title}</Text>); },
                             }}
                            style={{backgroundColor: '#2196f3'}}
                           />
                       }
            />
        );
    }
}
