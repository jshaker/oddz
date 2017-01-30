Object.defineProperty(exports,"__esModule",{value:true});var _react2=require('react');var _react3=_interopRequireDefault(_react2);var _index=require('./../../node_modules/react-transform-hmr/lib/index.js');var _index2=_interopRequireDefault(_index);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();
var _reactNative=require('react-native');
var _FirebaseApp=require('../FirebaseApp');var _FirebaseApp2=_interopRequireDefault(_FirebaseApp);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _components={CompleteRegistrationModal:{displayName:'CompleteRegistrationModal'}};var _node_modulesReactTransformHmrLibIndexJs2=(0,_index2.default)({filename:'/Users/mathieudiab/oddzReal/app/modals/CompleteRegistrationModal.js',components:_components,locals:[module],imports:[_react3.default]});function _wrapComponent(id){return function(Component){return _node_modulesReactTransformHmrLibIndexJs2(Component,id);};}var CompleteRegistrationModal=_wrapComponent('CompleteRegistrationModal')(function(_Component){_inherits(CompleteRegistrationModal,_Component);




function CompleteRegistrationModal(props,context){_classCallCheck(this,CompleteRegistrationModal);var _this=_possibleConstructorReturn(this,(CompleteRegistrationModal.__proto__||Object.getPrototypeOf(CompleteRegistrationModal)).call(this,
props,context));
_this.state={
screenName:""};


_this.registerUser=_this.registerUser.bind(_this);return _this;
}_createClass(CompleteRegistrationModal,[{key:'registerUser',value:function registerUser(){var userId;return regeneratorRuntime.async(function registerUser$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regeneratorRuntime.awrap(


_FirebaseApp2.default.auth().currentUser.uid);case 2:userId=_context.sent;
_FirebaseApp.FireDB.ref('users/'+userId).set(this.state);case 4:case'end':return _context.stop();}}},null,this);}},{key:'render',value:function render()


{var _this2=this;
return(
_react3.default.createElement(_reactNative.Modal,{animationType:"slide",
transparent:false,
visible:this.props.visible,
onRequestClose:function onRequestClose(){return null;}},

_react3.default.createElement(_reactNative.View,null,
_react3.default.createElement(_reactNative.Text,null,'Enter your information'),
_react3.default.createElement(_reactNative.TextInput,{
style:{height:40,borderColor:'gray',borderWidth:1},
onChangeText:function onChangeText(text){return _this2.setState({screenName:text});},
placeholder:'Screen Name',
value:this.state.screenName}),

_react3.default.createElement(_reactNative.Button,{
title:'Create User',
color:'#e0e0e0',
onPress:this.registerUser}))));




}}]);return CompleteRegistrationModal;}(_react2.Component));



CompleteRegistrationModal.propTypes={
visible:_react2.PropTypes.bool};exports.default=


CompleteRegistrationModal;