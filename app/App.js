import React, { Component } from 'react';
import * as firebase from 'firebase';
import Login from './screens/Login';
import { Navigator, View, Text } from 'react-native';

const config = {
    apiKey: "AIzaSyC6e2bDhxGSKQBZxKJptdEEl8nvMt4Ld78",
    authDomain: "oddz-18460.firebaseapp.com",
    databaseURL: "https://oddz-18460.firebaseio.com",
    storageBucket: "oddz-18460.appspot.com"
};
firebase.initializeApp(config);


export default class App extends Component {
    render() {
        return (
            <Navigator initialRoute={{ screen: Login }}
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
