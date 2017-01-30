




















'use strict';var _react2=require('react');var _react3=_interopRequireDefault(_react2);var _index=require('./../../react-transform-hmr/lib/index.js');var _index2=_interopRequireDefault(_index);var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();




var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _components={LoginButton:{displayName:'LoginButton'}};var _reactTransformHmrLibIndexJs2=(0,_index2.default)({filename:'/Users/mathieudiab/oddzReal/node_modules/react-native-fbsdk/js/FBLoginButton.js',components:_components,locals:[module],imports:[_react3.default]});function _wrapComponent(id){return function(Component){return _reactTransformHmrLibIndexJs2(Component,id);};}var LoginButton=_wrapComponent('LoginButton')(function(_React$Component){_inherits(LoginButton,_React$Component);function LoginButton(){_classCallCheck(this,LoginButton);return _possibleConstructorReturn(this,(LoginButton.__proto__||Object.getPrototypeOf(LoginButton)).apply(this,arguments));}_createClass(LoginButton,[{key:'_eventHandler',value:function _eventHandler(











































































event){
var eventDict=event.nativeEvent;
if(eventDict.type==='loginFinished'){
if(this.props.onLoginFinished){
this.props.onLoginFinished(eventDict.error,eventDict.result);
}
}else if(eventDict.type==='logoutFinished'){
if(this.props.onLogoutFinished){
this.props.onLogoutFinished();
}
}
}},{key:'render',value:function render()

{
return(
_react3.default.createElement(RCTFBLoginButton,_extends({},
this.props,{
onChange:this._eventHandler.bind(this)})));


}}]);return LoginButton;}(_react3.default.Component));


LoginButton.propTypes=_extends({},
_reactNative.View.propTypes,{
readPermissions:_react2.PropTypes.arrayOf(_react2.PropTypes.string),
publishPermissions:_react2.PropTypes.arrayOf(_react2.PropTypes.string),
onLoginFinished:_react2.PropTypes.func,
onLogoutFinished:_react2.PropTypes.func,
loginBehaviorAndroid:_react2.PropTypes.oneOf(['native_with_fallback','native_only','web_only']),
loginBehaviorIOS:_react2.PropTypes.oneOf(['native','browser','system_account','web']),
defaultAudience:_react2.PropTypes.oneOf(['only_me','friends','everyone']),
tooltipBehaviorIOS:_react2.PropTypes.oneOf(['auto','force_display','disable'])});


var styles=_reactNative.StyleSheet.create({
defaultButtonStyle:{
height:30,
width:180}});



LoginButton.defaultProps={
style:styles.defaultButtonStyle};


var RCTFBLoginButton=(0,_reactNative.requireNativeComponent)(
'RCTFBLoginButton',
LoginButton,
{nativeOnly:{onChange:true}});


module.exports=LoginButton;