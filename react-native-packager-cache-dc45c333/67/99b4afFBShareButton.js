





















'use strict';var _react2=require('react');var _react3=_interopRequireDefault(_react2);var _index=require('./../../react-transform-hmr/lib/index.js');var _index2=_interopRequireDefault(_index);var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();




var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _components={ShareButton:{displayName:'ShareButton'}};var _reactTransformHmrLibIndexJs2=(0,_index2.default)({filename:'/Users/mathieudiab/oddzReal/node_modules/react-native-fbsdk/js/FBShareButton.js',components:_components,locals:[module],imports:[_react3.default]});function _wrapComponent(id){return function(Component){return _reactTransformHmrLibIndexJs2(Component,id);};}var ShareButton=_wrapComponent('ShareButton')(function(_React$Component){_inherits(ShareButton,_React$Component);function ShareButton(){_classCallCheck(this,ShareButton);return _possibleConstructorReturn(this,(ShareButton.__proto__||Object.getPrototypeOf(ShareButton)).apply(this,arguments));}_createClass(ShareButton,[{key:'render',value:function render()
























{
return(
_react3.default.createElement(RCTFBShareButton,
this.props));


}}]);return ShareButton;}(_react3.default.Component));


ShareButton.propTypes=_extends({},
_reactNative.View.propTypes,{
shareContent:_react2.PropTypes.object});


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