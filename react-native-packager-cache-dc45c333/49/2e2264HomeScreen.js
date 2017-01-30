Object.defineProperty(exports,"__esModule",{value:true});var _react2=require('react');var _react3=_interopRequireDefault(_react2);var _index=require('./../../node_modules/react-transform-hmr/lib/index.js');var _index2=_interopRequireDefault(_index);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();
var _reactNative=require('react-native');
var _FirebaseApp=require('../FirebaseApp');var _FirebaseApp2=_interopRequireDefault(_FirebaseApp);
var _CompleteRegistrationModal=require('../modals/CompleteRegistrationModal');var _CompleteRegistrationModal2=_interopRequireDefault(_CompleteRegistrationModal);
var _ScreenNavs=require('./ScreenNavs');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _components={HomeScreen:{displayName:'HomeScreen'}};var _node_modulesReactTransformHmrLibIndexJs2=(0,_index2.default)({filename:'/Users/mathieudiab/oddzReal/app/screens/HomeScreen.js',components:_components,locals:[module],imports:[_react3.default]});function _wrapComponent(id){return function(Component){return _node_modulesReactTransformHmrLibIndexJs2(Component,id);};}var HomeScreen=_wrapComponent('HomeScreen')(function(_Component){_inherits(HomeScreen,_Component);




function HomeScreen(props,context){_classCallCheck(this,HomeScreen);var _this=_possibleConstructorReturn(this,(HomeScreen.__proto__||Object.getPrototypeOf(HomeScreen)).call(this,
props,context));
_this.state={
userInfo:{},
userInfoModal:false};


_this.userRef=null;
_this.listener=null;

_this.logout=_this.logout.bind(_this);
_this.listenUserInfo=_this.listenUserInfo.bind(_this);
_this.unlistenUserInfo=_this.unlistenUserInfo.bind(_this);
_this.redirectAddFriends=_this.redirectAddFriends.bind(_this);
_this.redirectMyFriends=_this.redirectMyFriends.bind(_this);
_this.redirectFriendRequests=_this.redirectFriendRequests.bind(_this);return _this;

}_createClass(HomeScreen,[{key:'componentWillMount',value:function componentWillMount()

{
this.listenUserInfo();
}},{key:'componentWillUnmount',value:function componentWillUnmount()


{
this.unlistenUserInfo();
}},{key:'logout',value:function logout(){return regeneratorRuntime.async(function logout$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regeneratorRuntime.awrap(



_FirebaseApp2.default.auth().signOut());case 2:
this.props.navigator.popToTop(0);case 3:case'end':return _context.stop();}}},null,this);}},{key:'listenUserInfo',value:function listenUserInfo(){return regeneratorRuntime.async(function listenUserInfo$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.t0=_FirebaseApp.FireDB;_context2.next=3;return regeneratorRuntime.awrap(



_FirebaseApp2.default.auth().currentUser.uid);case 3:_context2.t1=_context2.sent;_context2.t2='users/'+_context2.t1;this.userRef=_context2.t0.ref.call(_context2.t0,_context2.t2);
this.listener=this.userRef.on('value',function(data){
if(data.val()==null){
this.setState({userInfoModal:true});
}else
{
this.setState({userInfoModal:false});
this.setState({userInfo:data.val()});
}
}.bind(this));case 7:case'end':return _context2.stop();}}},null,this);}},{key:'unlistenUserInfo',value:function unlistenUserInfo()


{
this.userRef.off('value',this.listener);
}},{key:'redirectAddFriends',value:function redirectAddFriends()

{
this.props.navigator.push(_ScreenNavs.AddFriendsScreenNavigation);
}},{key:'redirectMyFriends',value:function redirectMyFriends()

{
this.props.navigator.push(_ScreenNavs.MyFriendsScreenNavigation);
}},{key:'redirectFriendRequests',value:function redirectFriendRequests()

{
this.props.navigator.push(_ScreenNavs.AcceptDeclineFriendScreenNavigation);
}},{key:'render',value:function render()

{
return(
_react3.default.createElement(_reactNative.View,{style:this.props.style},
_react3.default.createElement(_CompleteRegistrationModal2.default,{visible:this.state.userInfoModal}),
_react3.default.createElement(_reactNative.Button,{
raised:true,
title:'Add Friends',
color:'#2196f3',
onPress:this.redirectAddFriends}),

_react3.default.createElement(_reactNative.Button,{
raised:true,
title:'My Friends',
color:'#ffc107',
onPress:this.redirectMyFriends}),

_react3.default.createElement(_reactNative.Button,{
raised:true,
title:'Friend Requests',
color:'#ffc107',
onPress:this.redirectFriendRequests}),

_react3.default.createElement(_reactNative.Button,{
raised:true,
title:'Log Out',
color:'#e0e0e0',
onPress:this.logout})));



}}]);return HomeScreen;}(_react2.Component));



HomeScreen.propTypes={
navigator:_react2.PropTypes.object.isRequired};exports.default=


HomeScreen;