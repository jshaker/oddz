Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _redux=require('redux');
var _reactRedux=require('react-redux');
var _ScreenNavs=require('./navscreens/ScreenNavs');
var _friendsListActions=require('./actions/friendsListActions');
var _friendRequestsActions=require('./actions/friendRequestsActions');
var _challengesListActions=require('./actions/challengesListActions');
var _userActions=require('./actions/userActions');
var _FirebaseApp=require('./FirebaseApp');
var _reactNativeElements=require('react-native-elements');

var styles=_reactNative.StyleSheet.create({
screen:{
paddingTop:64,
flex:1,
backgroundColor:'white'}});var





NavApp=function(_Component){babelHelpers.inherits(NavApp,_Component);

function NavApp(props,context){babelHelpers.classCallCheck(this,NavApp);var _this=babelHelpers.possibleConstructorReturn(this,(NavApp.__proto__||Object.getPrototypeOf(NavApp)).call(this,
props,context));

_this.navigator=null;
_this.backButtonListener=null;

_this.friendsRef=null;
_this.friendsAddedListener=null;
_this.friendsRemovedListener=null;


_this.friendRequestsRef=null;
_this.friendRequestAddedListener=null;
_this.friendRequestRemovedListener=null;


_this.challengeRequestRef=null;
_this.challengeRequestAddedListener=null;
_this.challengeRequestChangedListener=null;
_this.challengeRequestRemovedListener=null;


_this.listenBackButton=_this.listenBackButton.bind(_this);
_this.unlistenBackButton=_this.unlistenBackButton.bind(_this);


_this.listenUserFriends=_this.listenUserFriends.bind(_this);
_this.unlistenUserFriends=_this.unlistenUserFriends.bind(_this);


_this.listenFriendRequests=_this.listenFriendRequests.bind(_this);
_this.unlistenFriendRequests=_this.unlistenFriendRequests.bind(_this);

_this.listenUserChallenges=_this.listenUserChallenges.bind(_this);
_this.unlistenChallengeRequests=_this.unlistenChallengeRequests.bind(_this);return _this;


}babelHelpers.createClass(NavApp,[{key:'componentWillMount',value:function componentWillMount()

{
this.listenBackButton();
this.listenUserFriends();
this.listenFriendRequests();
this.listenUserChallenges();
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this.unlistenBackButton();
this.unlistenUserFriends();
this.unlistenChallengeRequests();
this.unlistenFriendRequests();
this.props.actions.userLogout();
}},{key:'listenBackButton',value:function listenBackButton()

{var _this2=this;
this.backButtonListener=_reactNative.BackAndroid.addEventListener('hardwareBackPress',function(){
if(_this2.navigator&&_this2.navigator.getCurrentRoutes().length>1){
_this2.navigator.pop();
return true;
}else
{
return false;
}
});
}},{key:'unlistenBackButton',value:function unlistenBackButton()

{
_reactNative.BackAndroid.removeEventListener('hardwareBackPress',this.backButtonListener);
}},{key:'listenUserFriends',value:function listenUserFriends(){return regeneratorRuntime.async(function listenUserFriends$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regeneratorRuntime.awrap(



_FirebaseApp.FireDB.ref('friends/'+this.props.userKey));case 2:this.friendsRef=_context.sent;
this.friendsAddedListener=this.friendsRef.on('child_added',function(data){
this.props.actions.addToFriendsList(babelHelpers.defineProperty({},data.key,data.val()));
}.bind(this));
this.friendsRemovedListener=this.friendsRef.on('child_removed',function(snapshot){
this.props.actions.removeFromFriendsList(snapshot.key);
}.bind(this));case 5:case'end':return _context.stop();}}},null,this);}},{key:'listenUserChallenges',value:function listenUserChallenges(){return regeneratorRuntime.async(function listenUserChallenges$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return regeneratorRuntime.awrap(




_FirebaseApp.FireDB.ref('challenges/'+this.props.userKey));case 2:this.challengeRequestRef=_context2.sent;
this.challengeRequestAddedListener=this.challengeRequestRef.on('child_added',function(data){
this.props.actions.addToChallengesList(babelHelpers.defineProperty({},data.key,data.val()));
}.bind(this));
this.challengeRequestRemovedListener=this.challengeRequestRef.on('child_removed',function(snapshot){
this.props.actions.removeFromChallengesList(snapshot.key);
}.bind(this));
this.challengeRequestChangedListener=this.challengeRequestRef.on('child_changed',function(data){
this.props.actions.updateChallenge(babelHelpers.defineProperty({},data.key,data.val()));
}.bind(this));case 6:case'end':return _context2.stop();}}},null,this);}},{key:'unlistenChallengeRequests',value:function unlistenChallengeRequests()



{
this.challengeRequestRef.off('child_added',this.challengeRequestAddedListener);
this.challengeRequestRef.off('child_removed',this.challengeRequestRemovedListener);
this.challengeRequestRef.off('child_changed',this.challengeRequestChangedListener);
}},{key:'unlistenUserFriends',value:function unlistenUserFriends()

{
this.friendsRef.off('child_added',this.friendsAddedListener);
this.friendsRef.off('child_removed',this.friendsRemovedListener);
}},{key:'listenFriendRequests',value:function listenFriendRequests(){return regeneratorRuntime.async(function listenFriendRequests$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:


this.friendRequestsRef=_FirebaseApp.FireDB.ref('friendRequests/'+this.props.userKey);
this.friendRequestAddedListener=this.friendRequestsRef.on('child_added',function(snapshot){
this.props.actions.addToFriendRequests(snapshot.val());
}.bind(this));
this.friendRequestRemovedListener=this.friendRequestsRef.on('child_removed',function(snapshot){
this.props.actions.removeFromFriendRequests(snapshot.key);
}.bind(this));case 3:case'end':return _context3.stop();}}},null,this);}},{key:'unlistenFriendRequests',value:function unlistenFriendRequests()


{
this.friendRequestsRef.off('child_added',this.friendRequestAddedListener);
this.friendRequestsRef.off('child_removed',this.friendRequestRemovedListener);
}},{key:'render',value:function render()



{var _this3=this;
return(
_react2.default.createElement(_reactNative.Navigator,{initialRoute:_ScreenNavs.HomeScreenNavigation,
renderScene:function renderScene(route,navigator){
_this3.navigator=navigator;
var Screen=route.screen;
if(route.challengeID){
var challengeID=route.challengeID;
}
return(
_react2.default.createElement(Screen,babelHelpers.extends({navigator:navigator,
style:styles.screen,
topLevelNavigator:_this3.props.navigator,
route:route},
route.passProps)));



},
navigationBar:
_react2.default.createElement(_reactNative.Navigator.NavigationBar,{
routeMapper:{
LeftButton:function LeftButton(route,navigator,index,navState)
{
if(route.showBackButton){
return(
_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNativeElements.Icon,{
size:40,
name:'chevron-left',
type:'material-icon',
color:'white',
onPress:function onPress(){return navigator.pop();},
underlayColor:'transparent'})));


}else{
return null;
}
},
RightButton:function RightButton(route,navigator,index,navState)
{return null;},
Title:function Title(route,navigator,index,navState)
{return _react2.default.createElement(_reactNative.View,{style:{justifyContent:'center',padding:15}},_react2.default.createElement(_reactNative.Text,{style:{textAlign:'center',fontSize:18,color:'white'}},route.title));}},

style:{backgroundColor:'#2196F3'}})}));




}}]);return NavApp;}(_react.Component);


function mapStateToProps(state,ownProps){
return{
userKey:state.userKey};

}

function mapDispatchToProps(dispatch){
return{

actions:(0,_redux.bindActionCreators)({addToFriendsList:_friendsListActions.addToFriendsList,removeFromFriendsList:_friendsListActions.removeFromFriendsList,userLogout:_userActions.userLogout,setUserInfo:_userActions.setUserInfo,setUserKey:_userActions.setUserKey,addToFriendRequests:_friendRequestsActions.addToFriendRequests,removeFromFriendRequests:_friendRequestsActions.removeFromFriendRequests,addToChallengesList:_challengesListActions.addToChallengesList,removeFromChallengesList:_challengesListActions.removeFromChallengesList,updateChallenge:_challengesListActions.updateChallenge},dispatch)};

}exports.default=

(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(NavApp);