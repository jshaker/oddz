Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _FirebaseApp=require('../FirebaseApp');var _FirebaseApp2=babelHelpers.interopRequireDefault(_FirebaseApp);
var _reactNative=require('react-native');
var _ScreenNavs=require('./ScreenNavs');var


RegisterScreen=function(_Component){babelHelpers.inherits(RegisterScreen,_Component);

function RegisterScreen(props,context){babelHelpers.classCallCheck(this,RegisterScreen);var _this=babelHelpers.possibleConstructorReturn(this,(RegisterScreen.__proto__||Object.getPrototypeOf(RegisterScreen)).call(this,
props,context));
_this.state={
email:"",
password:""};

_this.signup=_this.signup.bind(_this);return _this;
}babelHelpers.createClass(RegisterScreen,[{key:'signup',value:function signup(){return regeneratorRuntime.async(function signup$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return regeneratorRuntime.awrap(



_FirebaseApp2.default.auth().createUserWithEmailAndPassword(this.state.email,this.state.password));case 3:
this.props.navigator.push(_ScreenNavs.HomeScreenNavigation);_context.next=8;break;case 6:_context.prev=6;_context.t0=_context['catch'](0);case 8:case'end':return _context.stop();}}},null,this,[[0,6]]);}},{key:'render',value:function render()





{var _this2=this;
return(
_react2.default.createElement(_reactNative.View,{style:this.props.style},
_react2.default.createElement(_reactNative.TextInput,{
style:{height:40,borderColor:'gray',borderWidth:1},
onChangeText:function onChangeText(text){return _this2.setState({email:text});},
placeholder:'Please enter your username...',
value:this.state.email}),

_react2.default.createElement(_reactNative.TextInput,{
style:{height:40,borderColor:'gray',borderWidth:1},
onChangeText:function onChangeText(text){return _this2.setState({password:text});},
placeholder:'Please enter your password...',
secureTextEntry:true,
value:this.state.password}),

_react2.default.createElement(_reactNative.Button,{
title:'Sign Up',
color:'#8bc34a',
onPress:this.signup})));



}}]);return RegisterScreen;}(_react.Component);


RegisterScreen.propTypes={
navigator:_react.PropTypes.object.isRequired};exports.default=


RegisterScreen;