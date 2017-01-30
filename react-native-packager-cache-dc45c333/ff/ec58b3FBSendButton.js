




















'use strict';

var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);


var _reactNative=require('react-native');var







SendButton=function(_React$Component){babelHelpers.inherits(SendButton,_React$Component);function SendButton(){babelHelpers.classCallCheck(this,SendButton);return babelHelpers.possibleConstructorReturn(this,(SendButton.__proto__||Object.getPrototypeOf(SendButton)).apply(this,arguments));}babelHelpers.createClass(SendButton,[{key:'render',value:function render()
















{
return(
_react2.default.createElement(RCTFBSendButton,
this.props));


}}]);return SendButton;}(_react2.default.Component);


SendButton.propTypes=babelHelpers.extends({},
_reactNative.View.propTypes,{
shareContent:_react.PropTypes.object});


var styles=_reactNative.StyleSheet.create({
defaultButtonStyle:{
height:30,
width:80}});



SendButton.defaultProps={
style:styles.defaultButtonStyle};


var RCTFBSendButton=(0,_reactNative.requireNativeComponent)(
'RCTFBSendButton',
SendButton);


module.exports=SendButton;