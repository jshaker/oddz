/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyC6e2bDhxGSKQBZxKJptdEEl8nvMt4Ld78",
    authDomain: "oddz-18460.firebaseapp.com",
    databaseURL: "https://oddz-18460.firebaseio.com",
    storageBucket: "oddz-18460.appspot.com"
};
firebase.initializeApp(config);

import React, { Component } from 'react';
import Login from './screens/Login';

export default class App extends Component {
    render() {
        return (
            <Login/>
        );
    }
}
