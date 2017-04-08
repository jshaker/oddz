Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _redux=require('redux');
var _reactRedux=require('react-redux');
var _reactNative=require('react-native');
var _LoginScreen=require('./LoginScreen');var _LoginScreen2=babelHelpers.interopRequireDefault(_LoginScreen);
var _RegisterScreen=require('./RegisterScreen');var _RegisterScreen2=babelHelpers.interopRequireDefault(_RegisterScreen);
var _LoadingScreen=require('./LoadingScreen');var _LoadingScreen2=babelHelpers.interopRequireDefault(_LoadingScreen);
var _reactNativeFbsdk=require('react-native-fbsdk');
var _userActions=require('../actions/userActions');
var _FirebaseApp=require('../FirebaseApp');var _FirebaseApp2=babelHelpers.interopRequireDefault(_FirebaseApp);
var _reactNativeElements=require('react-native-elements');

var styles=_reactNative.StyleSheet.create({
container:{
padding:10,
flexDirection:'column',
justifyContent:'space-around',
flex:1},

iconAndLabelContainer:{
alignItems:'center',
justifyContent:'center'}});var



LandingScreen=function(_Component){babelHelpers.inherits(LandingScreen,_Component);

function LandingScreen(props,context){babelHelpers.classCallCheck(this,LandingScreen);var _this=babelHelpers.possibleConstructorReturn(this,(LandingScreen.__proto__||Object.getPrototypeOf(LandingScreen)).call(this,
props,context));
_this.redirectLogin=_this.redirectLogin.bind(_this);
_this.redirectRegister=_this.redirectRegister.bind(_this);
_this.loginWithFacebook=_this.loginWithFacebook.bind(_this);return _this;
}babelHelpers.createClass(LandingScreen,[{key:'redirectLogin',value:function redirectLogin()

{
this.props.navigator.push({screen:_LoginScreen2.default});
}},{key:'redirectRegister',value:function redirectRegister()

{
this.props.navigator.push({screen:_RegisterScreen2.default});
}},{key:'loginWithFacebook',value:function loginWithFacebook(){var result,_ref,accessToken,credential,_ref2,uid;return regeneratorRuntime.async(function loginWithFacebook$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return regeneratorRuntime.awrap(



_reactNativeFbsdk.LoginManager.logInWithReadPermissions(['public_profile']));case 3:result=_context.sent;if(!
result.isCancelled){_context.next=6;break;}return _context.abrupt('return');case 6:_context.next=8;return regeneratorRuntime.awrap(


_reactNativeFbsdk.AccessToken.getCurrentAccessToken());case 8:_ref=_context.sent;accessToken=_ref.accessToken;
credential=_FirebaseApp.FacebookAuthProvider.credential(accessToken);_context.next=13;return regeneratorRuntime.awrap(
_FirebaseApp2.default.auth().signInWithCredential(credential));case 13:_ref2=_context.sent;uid=_ref2.uid;
this.props.actions.setUserKey(uid);
this.props.navigator.push({screen:_LoadingScreen2.default});_context.next=22;break;case 19:_context.prev=19;_context.t0=_context['catch'](0);


console.log("error",_context.t0);case 22:case'end':return _context.stop();}}},null,this,[[0,19]]);}},{key:'render',value:function render()



{


return(
_react2.default.createElement(_reactNative.View,{style:this.props.style},
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.View,{style:styles.iconAndLabelContainer},
_react2.default.createElement(_reactNativeElements.Icon,{
reverse:true,
raised:true,
name:'dice-6',
type:'material-community',
color:'#FF5252',
size:100,
style:styles.iconButton,
onPress:this.redirectChallenge})),

_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNativeElements.Button,{
large:true,
title:'LOG IN',
color:'white',
backgroundColor:'#2196f3',
onPress:this.redirectLogin}),

_react2.default.createElement(_reactNativeElements.Button,{
large:true,
title:'SIGN UP',
color:'white',
backgroundColor:'#ff5252',
onPress:this.redirectRegister})),


_react2.default.createElement(_reactNativeElements.SocialIcon,{
title:'CONNECT WITH FACEBOOK',
button:true,
type:'facebook',
onPress:this.loginWithFacebook}))));




}}]);return LandingScreen;}(_react.Component);


LandingScreen.propTypes={
navigator:_react.PropTypes.object.isRequired};


function mapDispatchToProps(dispatch){
return{
actions:(0,_redux.bindActionCreators)({setUserKey:_userActions.setUserKey},dispatch)};

}exports.default=

(0,_reactRedux.connect)(null,mapDispatchToProps)(LandingScreen);