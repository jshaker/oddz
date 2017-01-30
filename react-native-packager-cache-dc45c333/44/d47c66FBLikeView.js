




















'use strict';

var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);


var _reactNative=require('react-native');var
















LikeView=function(_React$Component){babelHelpers.inherits(LikeView,_React$Component);function LikeView(){babelHelpers.classCallCheck(this,LikeView);return babelHelpers.possibleConstructorReturn(this,(LikeView.__proto__||Object.getPrototypeOf(LikeView)).apply(this,arguments));}babelHelpers.createClass(LikeView,[{key:'render',value:function render()









































{
return(
_react2.default.createElement(RCTFBLikeView,
this.props));


}}]);return LikeView;}(_react2.default.Component);


LikeView.propTypes=babelHelpers.extends({},
_reactNative.View.propTypes,{
objectIdAndType:_react.PropTypes.object.isRequired,
likeViewStyle:_react.PropTypes.oneOf(['standard','button','box_count']),
auxiliaryViewPosition:_react.PropTypes.oneOf(['top','bottom','inline']),
horizontalAlignment:_react.PropTypes.oneOf(['center','left','right']),
foregroundColor:_react.PropTypes.number,
soundEnabled:_react.PropTypes.bool});


var styles=_reactNative.StyleSheet.create({
defaultButtonStyle:{
height:65,
width:300}});



LikeView.defaultProps={style:styles.defaultButtonStyle};

var RCTFBLikeView=(0,_reactNative.requireNativeComponent)(
'RCTFBLikeView',
LikeView);


module.exports=LikeView;