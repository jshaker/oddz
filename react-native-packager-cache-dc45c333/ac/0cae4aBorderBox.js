










'use strict';var _react2=require('react');var _react3=_interopRequireDefault(_react2);var _index=require('./../../../react-transform-hmr/lib/index.js');var _index2=_interopRequireDefault(_index);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _components={BorderBox:{displayName:'BorderBox'}};var _reactTransformHmrLibIndexJs2=(0,_index2.default)({filename:'/Users/mathieudiab/oddzReal/node_modules/react-native/Libraries/Inspector/BorderBox.js',components:_components,locals:[module],imports:[_react3.default]});function _wrapComponent(id){return function(Component){return _reactTransformHmrLibIndexJs2(Component,id);};}

var React=require('React');
var View=require('View');var BorderBox=_wrapComponent('BorderBox')(function(_React$Component){_inherits(BorderBox,_React$Component);function BorderBox(){_classCallCheck(this,BorderBox);return _possibleConstructorReturn(this,(BorderBox.__proto__||Object.getPrototypeOf(BorderBox)).apply(this,arguments));}_createClass(BorderBox,[{key:'render',value:function render()


{
var box=this.props.box;
if(!box){
return this.props.children;
}
var style={
borderTopWidth:box.top,
borderBottomWidth:box.bottom,
borderLeftWidth:box.left,
borderRightWidth:box.right};

return(
React.createElement(View,{style:[style,this.props.style]},
this.props.children));


}}]);return BorderBox;}(React.Component));


module.exports=BorderBox;