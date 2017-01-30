Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _FirebaseApp=require('../FirebaseApp');var _FirebaseApp2=babelHelpers.interopRequireDefault(_FirebaseApp);var

CompleteRegistrationModal=function(_Component){babelHelpers.inherits(CompleteRegistrationModal,_Component);


function CompleteRegistrationModal(props,context){babelHelpers.classCallCheck(this,CompleteRegistrationModal);var _this=babelHelpers.possibleConstructorReturn(this,(CompleteRegistrationModal.__proto__||Object.getPrototypeOf(CompleteRegistrationModal)).call(this,
props,context));
_this.state={
screenName:""};


_this.registerUser=_this.registerUser.bind(_this);return _this;
}babelHelpers.createClass(CompleteRegistrationModal,[{key:'registerUser',value:function registerUser(){var userId;return regeneratorRuntime.async(function registerUser$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regeneratorRuntime.awrap(


_FirebaseApp2.default.auth().currentUser.uid);case 2:userId=_context.sent;
_FirebaseApp.FireDB.ref('users/'+userId).set(this.state);case 4:case'end':return _context.stop();}}},null,this);}},{key:'render',value:function render()


{var _this2=this;
return(
_react2.default.createElement(_reactNative.Modal,{animationType:"slide",
transparent:false,
visible:this.props.visible,
onRequestClose:function onRequestClose(){return null;}},

_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNative.Text,null,'Enter your information'),
_react2.default.createElement(_reactNative.TextInput,{
style:{height:40,borderColor:'gray',borderWidth:1},
onChangeText:function onChangeText(text){return _this2.setState({screenName:text});},
placeholder:'Screen Name',
value:this.state.screenName}),

_react2.default.createElement(_reactNative.Button,{
title:'Create User',
color:'#e0e0e0',
onPress:this.registerUser}))));




}}]);return CompleteRegistrationModal;}(_react.Component);



CompleteRegistrationModal.propTypes={
visible:_react.PropTypes.bool};exports.default=


CompleteRegistrationModal;