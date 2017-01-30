





















'use strict';

var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);


var _reactNative=require('react-native');var







ShareButton=function(_React$Component){babelHelpers.inherits(ShareButton,_React$Component);function ShareButton(){babelHelpers.classCallCheck(this,ShareButton);return babelHelpers.possibleConstructorReturn(this,(ShareButton.__proto__||Object.getPrototypeOf(ShareButton)).apply(this,arguments));}babelHelpers.createClass(ShareButton,[{key:'render',value:function render()
















{
return(
_react2.default.createElement(RCTFBShareButton,
this.props));


}}]);return ShareButton;}(_react2.default.Component);


ShareButton.propTypes=babelHelpers.extends({},
_reactNative.View.propTypes,{
shareContent:_react.PropTypes.object});


var styles=_reactNative.StyleSheet.create({
defaultButtonStyle:{
height:30,
width:80}});



ShareButton.defaultProps={
style:styles.defaultButtonStyle};


var RCTFBShareButton=(0,_reactNative.requireNativeComponent)(
'RCTFBShareButton',
ShareButton);


module.exports=ShareButton;