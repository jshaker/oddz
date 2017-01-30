




















'use strict';

var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);


var _reactNative=require('react-native');var


















LoginButton=function(_React$Component){babelHelpers.inherits(LoginButton,_React$Component);function LoginButton(){babelHelpers.classCallCheck(this,LoginButton);return babelHelpers.possibleConstructorReturn(this,(LoginButton.__proto__||Object.getPrototypeOf(LoginButton)).apply(this,arguments));}babelHelpers.createClass(LoginButton,[{key:'_eventHandler',value:function _eventHandler(
























































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
_react2.default.createElement(RCTFBLoginButton,babelHelpers.extends({},
this.props,{
onChange:this._eventHandler.bind(this)})));


}}]);return LoginButton;}(_react2.default.Component);


LoginButton.propTypes=babelHelpers.extends({},
_reactNative.View.propTypes,{
readPermissions:_react.PropTypes.arrayOf(_react.PropTypes.string),
publishPermissions:_react.PropTypes.arrayOf(_react.PropTypes.string),
onLoginFinished:_react.PropTypes.func,
onLogoutFinished:_react.PropTypes.func,
loginBehaviorAndroid:_react.PropTypes.oneOf(['native_with_fallback','native_only','web_only']),
loginBehaviorIOS:_react.PropTypes.oneOf(['native','browser','system_account','web']),
defaultAudience:_react.PropTypes.oneOf(['only_me','friends','everyone']),
tooltipBehaviorIOS:_react.PropTypes.oneOf(['auto','force_display','disable'])});


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