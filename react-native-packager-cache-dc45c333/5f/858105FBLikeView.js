




















'use strict';var _react2=require('react');var _react3=_interopRequireDefault(_react2);var _index=require('./../../react-transform-hmr/lib/index.js');var _index2=_interopRequireDefault(_index);var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();




var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _components={LikeView:{displayName:'LikeView'}};var _reactTransformHmrLibIndexJs2=(0,_index2.default)({filename:'/Users/mathieudiab/oddzReal/node_modules/react-native-fbsdk/js/FBLikeView.js',components:_components,locals:[module],imports:[_react3.default]});function _wrapComponent(id){return function(Component){return _reactTransformHmrLibIndexJs2(Component,id);};}var LikeView=_wrapComponent('LikeView')(function(_React$Component){_inherits(LikeView,_React$Component);function LikeView(){_classCallCheck(this,LikeView);return _possibleConstructorReturn(this,(LikeView.__proto__||Object.getPrototypeOf(LikeView)).apply(this,arguments));}_createClass(LikeView,[{key:'render',value:function render()


























































{
return(
_react3.default.createElement(RCTFBLikeView,
this.props));


}}]);return LikeView;}(_react3.default.Component));


LikeView.propTypes=_extends({},
_reactNative.View.propTypes,{
objectIdAndType:_react2.PropTypes.object.isRequired,
likeViewStyle:_react2.PropTypes.oneOf(['standard','button','box_count']),
auxiliaryViewPosition:_react2.PropTypes.oneOf(['top','bottom','inline']),
horizontalAlignment:_react2.PropTypes.oneOf(['center','left','right']),
foregroundColor:_react2.PropTypes.number,
soundEnabled:_react2.PropTypes.bool});


var styles=_reactNative.StyleSheet.create({
defaultButtonStyle:{
height:65,
width:300}});



LikeView.defaultProps={style:styles.defaultButtonStyle};

var RCTFBLikeView=(0,_reactNative.requireNativeComponent)(
'RCTFBLikeView',
LikeView);


module.exports=LikeView;