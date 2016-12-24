import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyC6e2bDhxGSKQBZxKJptdEEl8nvMt4Ld78",
    authDomain: "oddz-18460.firebaseapp.com",
    databaseURL: "https://oddz-18460.firebaseio.com",
    storageBucket: "oddz-18460.appspot.com"
};
export const FacebookAuthProvider = firebase.auth.FacebookAuthProvider;

export default firebase.initializeApp(config);