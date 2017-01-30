Object.defineProperty(exports,"__esModule",{value:true});exports.FireDB=exports.FacebookAuthProvider=undefined;var _firebase=require("firebase");var firebase=_interopRequireWildcard(_firebase);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}
var config={
apiKey:"AIzaSyC6e2bDhxGSKQBZxKJptdEEl8nvMt4Ld78",
authDomain:"oddz-18460.firebaseapp.com",
databaseURL:"https://oddz-18460.firebaseio.com",
storageBucket:"oddz-18460.appspot.com"};


var FirebaseApp=firebase.initializeApp(config);

var FacebookAuthProvider=exports.FacebookAuthProvider=firebase.auth.FacebookAuthProvider;

var FireDB=exports.FireDB=FirebaseApp.database();exports.default=

FirebaseApp;