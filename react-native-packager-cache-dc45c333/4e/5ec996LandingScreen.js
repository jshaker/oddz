Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _ScreenNavs=require('./ScreenNavs');
var _reactNativeFbsdk=require('react-native-fbsdk');
var _FirebaseApp=require('../FirebaseApp');var _FirebaseApp2=babelHelpers.interopRequireDefault(_FirebaseApp);var

LandingScreen=function(_Component){babelHelpers.inherits(LandingScreen,_Component);

function LandingScreen(props,context){babelHelpers.classCallCheck(this,LandingScreen);var _this=babelHelpers.possibleConstructorReturn(this,(LandingScreen.__proto__||Object.getPrototypeOf(LandingScreen)).call(this,
props,context));
_this.redirectLogin=_this.redirectLogin.bind(_this);
_this.redirectRegister=_this.redirectRegister.bind(_this);
_this.loginWithFacebook=_this.loginWithFacebook.bind(_this);return _this;
}babelHelpers.createClass(LandingScreen,[{key:'redirectLogin',value:function redirectLogin()

{
this.props.navigator.push(_ScreenNavs.LoginScreenNavigation);
}},{key:'redirectRegister',value:function redirectRegister()

{
this.props.navigator.push(_ScreenNavs.RegisterScreenNavigation);
}},{key:'loginWithFacebook',value:function loginWithFacebook(){var result,_ref,accessToken,credential;return regeneratorRuntime.async(function loginWithFacebook$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return regeneratorRuntime.awrap(



_reactNativeFbsdk.LoginManager.logInWithReadPermissions(['public_profile']));case 3:result=_context.sent;if(!
result.isCancelled){_context.next=7;break;}
console.log("test");return _context.abrupt('return');case 7:_context.next=9;return regeneratorRuntime.awrap(


_reactNativeFbsdk.AccessToken.getCurrentAccessToken());case 9:_ref=_context.sent;accessToken=_ref.accessToken;
credential=_FirebaseApp.FacebookAuthProvider.credential(accessToken);_context.next=14;return regeneratorRuntime.awrap(
_FirebaseApp2.default.auth().signInWithCredential(credential));case 14:
this.props.navigator.push(_ScreenNavs.HomeScreenNavigation);_context.next=20;break;case 17:_context.prev=17;_context.t0=_context['catch'](0);


console.log("error",_context.t0);case 20:case'end':return _context.stop();}}},null,this,[[0,17]]);}},{key:'render',value:function render()



{


return(
_react2.default.createElement(_reactNative.View,{style:this.props.style},
_react2.default.createElement(_reactNative.Button,{
title:'Log In',
color:'#ffc107',
onPress:this.redirectLogin}),

_react2.default.createElement(_reactNative.Button,{
title:'Sign Up',
color:'#8bc34a',
onPress:this.redirectRegister}),

_react2.default.createElement(_reactNative.Button,{
title:'Continue With Facebook',
color:'#3b5998',
onPress:this.loginWithFacebook})));



}}]);return LandingScreen;}(_react.Component);


LandingScreen.propTypes={
navigator:_react.PropTypes.object.isRequired};exports.default=


LandingScreen;