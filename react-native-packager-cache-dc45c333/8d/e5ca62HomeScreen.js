Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _FirebaseApp=require('../FirebaseApp');var _FirebaseApp2=babelHelpers.interopRequireDefault(_FirebaseApp);
var _CompleteRegistrationModal=require('../modals/CompleteRegistrationModal');var _CompleteRegistrationModal2=babelHelpers.interopRequireDefault(_CompleteRegistrationModal);
var _ScreenNavs=require('./ScreenNavs');var

HomeScreen=function(_Component){babelHelpers.inherits(HomeScreen,_Component);


function HomeScreen(props,context){babelHelpers.classCallCheck(this,HomeScreen);var _this=babelHelpers.possibleConstructorReturn(this,(HomeScreen.__proto__||Object.getPrototypeOf(HomeScreen)).call(this,
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

}babelHelpers.createClass(HomeScreen,[{key:'componentWillMount',value:function componentWillMount()

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
_react2.default.createElement(_reactNative.View,{style:this.props.style},
_react2.default.createElement(_CompleteRegistrationModal2.default,{visible:this.state.userInfoModal}),
_react2.default.createElement(_reactNative.Button,{
raised:true,
title:'Add Friends',
color:'#2196f3',
onPress:this.redirectAddFriends}),

_react2.default.createElement(_reactNative.Button,{
raised:true,
title:'My Friends',
color:'#ffc107',
onPress:this.redirectMyFriends}),

_react2.default.createElement(_reactNative.Button,{
raised:true,
title:'Friend Requests',
color:'#ffc107',
onPress:this.redirectFriendRequests}),

_react2.default.createElement(_reactNative.Button,{
raised:true,
title:'Log Out',
color:'#e0e0e0',
onPress:this.logout})));



}}]);return HomeScreen;}(_react.Component);



HomeScreen.propTypes={
navigator:_react.PropTypes.object.isRequired};exports.default=


HomeScreen;