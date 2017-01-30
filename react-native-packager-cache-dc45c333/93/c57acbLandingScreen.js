Object.defineProperty(exports,"__esModule",{value:true});var _react2=require('react');var _react3=_interopRequireDefault(_react2);var _index=require('./../../node_modules/react-transform-hmr/lib/index.js');var _index2=_interopRequireDefault(_index);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();
var _reactNative=require('react-native');
var _ScreenNavs=require('./ScreenNavs');
var _reactNativeFbsdk=require('react-native-fbsdk');
var _FirebaseApp=require('../FirebaseApp');var _FirebaseApp2=_interopRequireDefault(_FirebaseApp);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _components={LandingScreen:{displayName:'LandingScreen'}};var _node_modulesReactTransformHmrLibIndexJs2=(0,_index2.default)({filename:'/Users/mathieudiab/oddzReal/app/screens/LandingScreen.js',components:_components,locals:[module],imports:[_react3.default]});function _wrapComponent(id){return function(Component){return _node_modulesReactTransformHmrLibIndexJs2(Component,id);};}var LandingScreen=_wrapComponent('LandingScreen')(function(_Component){_inherits(LandingScreen,_Component);



function LandingScreen(props,context){_classCallCheck(this,LandingScreen);var _this=_possibleConstructorReturn(this,(LandingScreen.__proto__||Object.getPrototypeOf(LandingScreen)).call(this,
props,context));
_this.redirectLogin=_this.redirectLogin.bind(_this);
_this.redirectRegister=_this.redirectRegister.bind(_this);
_this.loginWithFacebook=_this.loginWithFacebook.bind(_this);return _this;
}_createClass(LandingScreen,[{key:'redirectLogin',value:function redirectLogin()

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
_react3.default.createElement(_reactNative.View,{style:this.props.style},
_react3.default.createElement(_reactNative.Button,{
title:'Log In',
color:'#ffc107',
onPress:this.redirectLogin}),

_react3.default.createElement(_reactNative.Button,{
title:'Sign Up',
color:'#8bc34a',
onPress:this.redirectRegister}),

_react3.default.createElement(_reactNative.Button,{
title:'Continue With Facebook',
color:'#3b5998',
onPress:this.loginWithFacebook})));



}}]);return LandingScreen;}(_react2.Component));


LandingScreen.propTypes={
navigator:_react2.PropTypes.object.isRequired};exports.default=


LandingScreen;