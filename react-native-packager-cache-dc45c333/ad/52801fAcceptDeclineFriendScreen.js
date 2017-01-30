Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _FirebaseApp=require('../FirebaseApp');var _FirebaseApp2=babelHelpers.interopRequireDefault(_FirebaseApp);
var _reactNative=require('react-native');







var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
backgroundColor:'#F5FCFF'},

row:{
flexDirection:'row',
padding:10,
justifyContent:'space-between'}});



var ds=new _reactNative.ListView.DataSource({rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});var

AcceptDeclineFriendScreen=function(_Component){babelHelpers.inherits(AcceptDeclineFriendScreen,_Component);

function AcceptDeclineFriendScreen(props,context){babelHelpers.classCallCheck(this,AcceptDeclineFriendScreen);var _this=babelHelpers.possibleConstructorReturn(this,(AcceptDeclineFriendScreen.__proto__||Object.getPrototypeOf(AcceptDeclineFriendScreen)).call(this,
props,context));
_this.state={
friendRequests:[],
userName:''};


_this.requestsRef=null;
_this.listener=null;
_this.listenerChildRemoved=null;

_this.goBack=_this.goBack.bind(_this);
_this.renderRow=_this.renderRow.bind(_this);
_this.listenFriendRequests=_this.listenFriendRequests.bind(_this);
_this.unlistenFriendRequests=_this.unlistenFriendRequests.bind(_this);
_this.getUserName=_this.getUserName.bind(_this);
_this.acceptFriend=_this.acceptFriend.bind(_this);
_this.rejectFriend=_this.rejectFriend.bind(_this);return _this;
}babelHelpers.createClass(AcceptDeclineFriendScreen,[{key:'componentWillMount',value:function componentWillMount()

{
this.listenFriendRequests();
this.getUserName();
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this.unlistenFriendRequests();
}},{key:'getUserName',value:function getUserName(){var currentUserId,screenNameRef;return regeneratorRuntime.async(function getUserName$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regeneratorRuntime.awrap(


_FirebaseApp2.default.auth().currentUser.uid);case 2:currentUserId=_context.sent;
screenNameRef=_FirebaseApp.FireDB.ref('users/'+currentUserId+'/screenName');
screenNameRef.once('value',function(snapshot){
this.setState({userName:snapshot.val()});
}.bind(this));case 5:case'end':return _context.stop();}}},null,this);}},{key:'renderRow',value:function renderRow(


rowData){
return(
_react2.default.createElement(_reactNative.View,{style:styles.row},
_react2.default.createElement(_reactNative.Text,null,rowData.screenName),
_react2.default.createElement(_reactNative.Button,{
title:'accept',
color:'#2196f3',
onPress:function(){
this.acceptFriend(rowData.id,rowData.screenName);
}.bind(this)}),

_react2.default.createElement(_reactNative.Button,{
title:'decline',
color:'red',
onPress:function(){
this.rejectFriend(rowData.id,rowData.screenName);
}.bind(this)})));



}},{key:'renderSeparator',value:function renderSeparator(

sectionID,rowID,adjacentRowHighlighted){
return(
_react2.default.createElement(_reactNative.View,{
key:sectionID+'-'+rowID,
style:{
height:adjacentRowHighlighted?4:1,
backgroundColor:adjacentRowHighlighted?'#3B5998':'#CCCCCC'}}));



}},{key:'goBack',value:function goBack()

{
this.props.navigator.pop();
}},{key:'listenFriendRequests',value:function listenFriendRequests(){return regeneratorRuntime.async(function listenFriendRequests$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.t0=_FirebaseApp.FireDB;_context2.next=3;return regeneratorRuntime.awrap(


_FirebaseApp2.default.auth().currentUser.uid);case 3:_context2.t1=_context2.sent;_context2.t2='friendRequests/'+_context2.t1;this.requestsRef=_context2.t0.ref.call(_context2.t0,_context2.t2);
this.listener=this.requestsRef.on('child_added',function(snapshot){
var requestList=[].concat(babelHelpers.toConsumableArray(this.state.friendRequests),[{id:snapshot.key,screenName:snapshot.val()}]);
this.setState({friendRequests:requestList});
}.bind(this));
this.listenerChildRemoved=this.requestsRef.on('child_removed',function(snapshot){
var requestList=[].concat(babelHelpers.toConsumableArray(this.state.friendRequests));
for(var i=0;i<requestList.length;i++){
if(requestList[i].id==snapshot.key){
requestList.splice(i,1);
break;
}
}
this.setState({friendRequests:requestList});
}.bind(this));case 8:case'end':return _context2.stop();}}},null,this);}},{key:'unlistenFriendRequests',value:function unlistenFriendRequests()


{
this.requestsRef.off('child_added',this.listener);
this.requestsRef.off('child_removed',this.listenerChildRemoved);
}},{key:'acceptFriend',value:function acceptFriend(

friendID,friendName){var currentUserId;return regeneratorRuntime.async(function acceptFriend$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return regeneratorRuntime.awrap(
_FirebaseApp2.default.auth().currentUser.uid);case 2:currentUserId=_context3.sent;
_FirebaseApp.FireDB.ref('friends/'+friendID+'/'+currentUserId).set(this.state.userName);
_FirebaseApp.FireDB.ref('friends/'+currentUserId+'/'+friendID).set(friendName);return _context3.abrupt('return',
_FirebaseApp.FireDB.ref('friendRequests/'+currentUserId+'/'+friendID).set(null));case 6:case'end':return _context3.stop();}}},null,this);}},{key:'rejectFriend',value:function rejectFriend(


friendID,friendName){var currentUserId;return regeneratorRuntime.async(function rejectFriend$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.next=2;return regeneratorRuntime.awrap(
_FirebaseApp2.default.auth().currentUser.uid);case 2:currentUserId=_context4.sent;return _context4.abrupt('return',
_FirebaseApp.FireDB.ref('friendRequests/'+currentUserId+'/'+friendID).set(null));case 4:case'end':return _context4.stop();}}},null,this);}},{key:'render',value:function render()




{
console.log(this.state.friendRequests);
return(
_react2.default.createElement(_reactNative.ListView,{
dataSource:ds.cloneWithRows(this.state.friendRequests),
renderRow:this.renderRow,
renderSeparator:this.renderSeparator,
style:{marginTop:60},
enableEmptySections:true}));


}}]);return AcceptDeclineFriendScreen;}(_react.Component);exports.default=AcceptDeclineFriendScreen;


AcceptDeclineFriendScreen.propTypes={
navigator:_react.PropTypes.object.isRequired};