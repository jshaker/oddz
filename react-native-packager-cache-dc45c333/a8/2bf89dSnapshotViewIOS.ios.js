










'use strict';var _react2=require('react');var _react3=_interopRequireDefault(_react2);var _index=require('./../../../react-transform-hmr/lib/index.js');var _index2=_interopRequireDefault(_index);var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp2;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _components={SnapshotViewIOS:{displayName:'SnapshotViewIOS'}};var _reactTransformHmrLibIndexJs2=(0,_index2.default)({filename:'/Users/mathieudiab/oddzReal/node_modules/react-native/Libraries/RCTTest/SnapshotViewIOS.ios.js',components:_components,locals:[module],imports:[_react3.default]});function _wrapComponent(id){return function(Component){return _reactTransformHmrLibIndexJs2(Component,id);};}

var React=require('React');
var StyleSheet=require('StyleSheet');var _require=
require('NativeModules'),TestModule=_require.TestModule;
var UIManager=require('UIManager');
var View=require('View');

var requireNativeComponent=require('requireNativeComponent');var SnapshotViewIOS=_wrapComponent('SnapshotViewIOS')((_temp2=_class=function(_React$Component){_inherits(SnapshotViewIOS,_React$Component);function SnapshotViewIOS(){var _ref;var _temp,_this,_ret;_classCallCheck(this,SnapshotViewIOS);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=SnapshotViewIOS.__proto__||Object.getPrototypeOf(SnapshotViewIOS)).call.apply(_ref,[this].concat(args))),_this),_this.















onDefaultAction=function(event){
TestModule.verifySnapshot(TestModule.markTestPassed);
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(SnapshotViewIOS,[{key:'render',value:function render()

{
var testIdentifier=this.props.testIdentifier||'test';
var onSnapshotReady=this.props.onSnapshotReady||this.onDefaultAction;
return(
React.createElement(RCTSnapshot,_extends({
style:style.snapshot},
this.props,{
onSnapshotReady:onSnapshotReady,
testIdentifier:testIdentifier})));


}}]);return SnapshotViewIOS;}(React.Component),_class.propTypes=_extends({},View.propTypes,{onSnapshotReady:React.PropTypes.func,testIdentifier:React.PropTypes.string}),_temp2));


var style=StyleSheet.create({
snapshot:{
flex:1}});






var RCTSnapshot=UIManager.RCTSnapshot?
requireNativeComponent('RCTSnapshot',SnapshotViewIOS):
View;

module.exports=SnapshotViewIOS;