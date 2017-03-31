import React, { Component } from 'react';
import WelcomeScreen from './landingscreens/WelcomeScreen';
import { Navigator, View, Text, TouchableHighlight, StyleSheet, BackAndroid } from 'react-native';
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

    constructor(props,context){
        super(props,context);

        this.navigator = null;
        this.backButtonListener = null;

        this.listenBackButton = this.listenBackButton.bind(this);
        this.unlistenBackButton = this.unlistenBackButton.bind(this);
    }

    componentWillMount(){
        this.listenBackButton();
    }

    componentWillUnmount(){
        this.unlistenBackButton();
    }

    listenBackButton(){
        this.backButtonListener = BackAndroid.addEventListener('hardwareBackPress', () => {
            if(this.navigator && this.navigator.getCurrentRoutes().length === 2){
                this.navigator.pop();
                return true;
            }
            else{
                return false;
            }
        });
    }

    unlistenBackButton(){
        BackAndroid.removeEventListener('hardwareBackPress', this.backButtonListener);
    }

    render() {
        return (
            <Provider store={store}>
                <Navigator initialRoute={{screen: WelcomeScreen}}
                           renderScene={(route,navigator) => {
                               this.navigator = navigator;
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
