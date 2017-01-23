import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyC6e2bDhxGSKQBZxKJptdEEl8nvMt4Ld78",
    authDomain: "oddz-18460.firebaseapp.com",
    databaseURL: "https://oddz-18460.firebaseio.com",
    storageBucket: "oddz-18460.appspot.com"
};

const FirebaseApp = firebase.initializeApp(config);

export const FacebookAuthProvider = firebase.auth.FacebookAuthProvider;

export const FireDB = FirebaseApp.database();

export default FirebaseApp;