Object.defineProperty(exports,"__esModule",{value:true});var _react2=require('react');var _react3=_interopRequireDefault(_react2);var _index=require('./../../node_modules/react-transform-hmr/lib/index.js');var _index2=_interopRequireDefault(_index);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();
var _FirebaseApp=require('../FirebaseApp');var _FirebaseApp2=_interopRequireDefault(_FirebaseApp);
var _reactNative=require('react-native');
var _ScreenNavs=require('./ScreenNavs');var _ScreenNavs2=_interopRequireDefault(_ScreenNavs);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _components={LoginScreen:{displayName:'LoginScreen'}};var _node_modulesReactTransformHmrLibIndexJs2=(0,_index2.default)({filename:'/Users/mathieudiab/oddzReal/app/screens/LoginScreen.js',components:_components,locals:[module],imports:[_react3.default]});function _wrapComponent(id){return function(Component){return _node_modulesReactTransformHmrLibIndexJs2(Component,id);};}var LoginScreen=_wrapComponent('LoginScreen')(function(_Component){_inherits(LoginScreen,_Component);



function LoginScreen(props,context){_classCallCheck(this,LoginScreen);var _this=_possibleConstructorReturn(this,(LoginScreen.__proto__||Object.getPrototypeOf(LoginScreen)).call(this,
props,context));
_this.state={
email:"",
password:""};

_this.login=_this.login.bind(_this);return _this;
}_createClass(LoginScreen,[{key:'login',value:function login(){return regeneratorRuntime.async(function login$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return regeneratorRuntime.awrap(



_FirebaseApp2.default.auth().signInWithEmailAndPassword(this.state.email,this.state.password));case 3:
this.props.navigator.push(_ScreenNavs2.default);_context.next=8;break;case 6:_context.prev=6;_context.t0=_context['catch'](0);case 8:case'end':return _context.stop();}}},null,this,[[0,6]]);}},{key:'render',value:function render()






{var _this2=this;
return(
_react3.default.createElement(_reactNative.View,{style:this.props.style},
_react3.default.createElement(_reactNative.TextInput,{
style:{height:40,borderColor:'gray',borderWidth:1},
onChangeText:function onChangeText(text){return _this2.setState({email:text});},
placeholder:'Please enter your username...',
value:this.state.email}),

_react3.default.createElement(_reactNative.TextInput,{
style:{height:40,borderColor:'gray',borderWidth:1},
onChangeText:function onChangeText(text){return _this2.setState({password:text});},
placeholder:'Please enter your password...',
secureTextEntry:true,
value:this.state.password}),

_react3.default.createElement(_reactNative.Button,{
title:'Log In',
color:'#ffc107',
onPress:this.login})));



}}]);return LoginScreen;}(_react2.Component));


LoginScreen.propTypes={
navigator:_react2.PropTypes.object.isRequired};exports.default=


LoginScreen;