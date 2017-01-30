










'use strict';var _react2=require('react');var _react3=_interopRequireDefault(_react2);var _index=require('./../../../react-transform-hmr/lib/index.js');var _index2=_interopRequireDefault(_index);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _components={Button:{displayName:'Button'}};var _reactTransformHmrLibIndexJs2=(0,_index2.default)({filename:'/Users/mathieudiab/oddzReal/node_modules/react-native/Libraries/Components/Button.js',components:_components,locals:[module],imports:[_react3.default]});function _wrapComponent(id){return function(Component){return _reactTransformHmrLibIndexJs2(Component,id);};}

var ColorPropType=require('ColorPropType');
var Platform=require('Platform');
var React=require('React');
var StyleSheet=require('StyleSheet');
var Text=require('Text');
var TouchableNativeFeedback=require('TouchableNativeFeedback');
var TouchableOpacity=require('TouchableOpacity');
var View=require('View');

var invariant=require('fbjs/lib/invariant');var Button=_wrapComponent('Button')((_temp=_class=function(_React$Component){_inherits(Button,_React$Component);function Button(){_classCallCheck(this,Button);return _possibleConstructorReturn(this,(Button.__proto__||Object.getPrototypeOf(Button)).apply(this,arguments));}_createClass(Button,[{key:'render',value:function render()



























































{var _props=






this.props,accessibilityLabel=_props.accessibilityLabel,color=_props.color,onPress=_props.onPress,title=_props.title,disabled=_props.disabled;
var buttonStyles=[styles.button];
var textStyles=[styles.text];
var Touchable=Platform.OS==='android'?TouchableNativeFeedback:TouchableOpacity;
if(color&&Platform.OS==='ios'){
textStyles.push({color:color});
}else if(color){
buttonStyles.push({backgroundColor:color});
}
if(disabled){
buttonStyles.push(styles.buttonDisabled);
textStyles.push(styles.textDisabled);
}
invariant(
typeof title==='string',
'The title prop of a Button must be a string');

var formattedTitle=Platform.OS==='android'?title.toUpperCase():title;
return(
React.createElement(Touchable,{
accessibilityComponentType:'button',
accessibilityLabel:accessibilityLabel,
accessibilityTraits:['button'],
disabled:disabled,
onPress:onPress},
React.createElement(View,{style:buttonStyles},
React.createElement(Text,{style:textStyles},formattedTitle))));



}}]);return Button;}(React.Component),_class.propTypes={title:React.PropTypes.string.isRequired,accessibilityLabel:React.PropTypes.string,color:ColorPropType,disabled:React.PropTypes.bool,onPress:React.PropTypes.func.isRequired},_temp));



var defaultBlue='#2196F3';
if(Platform.OS==='ios'){

defaultBlue='#0C42FD';
}

var styles=StyleSheet.create({
button:Platform.select({
ios:{},
android:{
elevation:4,
backgroundColor:defaultBlue,
borderRadius:2}}),


text:Platform.select({
ios:{
color:defaultBlue,
textAlign:'center',
padding:8,
fontSize:18},

android:{
textAlign:'center',
color:'white',
padding:8,
fontWeight:'500'}}),


buttonDisabled:Platform.select({
ios:{},
android:{
elevation:0,
backgroundColor:'#dfdfdf'}}),


textDisabled:Platform.select({
ios:{
color:'#cdcdcd'},

android:{
color:'#a1a1a1'}})});




module.exports=Button;