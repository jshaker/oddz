Object.defineProperty(exports,"__esModule",{value:true});var _react2=require('react');var _react3=_interopRequireDefault(_react2);var _index=require('./../../node_modules/react-transform-hmr/lib/index.js');var _index2=_interopRequireDefault(_index);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();
var _FirebaseApp=require('../FirebaseApp');var _FirebaseApp2=_interopRequireDefault(_FirebaseApp);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _components={AcceptDeclineFriendScreen:{displayName:'AcceptDeclineFriendScreen'}};var _node_modulesReactTransformHmrLibIndexJs2=(0,_index2.default)({filename:'/Users/mathieudiab/oddzReal/app/screens/AcceptDeclineFriendScreen.js',components:_components,locals:[module],imports:[_react3.default]});function _wrapComponent(id){return function(Component){return _node_modulesReactTransformHmrLibIndexJs2(Component,id);};}







var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
backgroundColor:'#F5FCFF'},

row:{
flexDirection:'row',
padding:10,
justifyContent:'space-between'}});



var ds=new _reactNative.ListView.DataSource({rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});var AcceptDeclineFriendScreen=_wrapComponent('AcceptDeclineFriendScreen')(function(_Component){_inherits(AcceptDeclineFriendScreen,_Component);



function AcceptDeclineFriendScreen(props,context){_classCallCheck(this,AcceptDeclineFriendScreen);var _this=_possibleConstructorReturn(this,(AcceptDeclineFriendScreen.__proto__||Object.getPrototypeOf(AcceptDeclineFriendScreen)).call(this,
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
}_createClass(AcceptDeclineFriendScreen,[{key:'componentWillMount',value:function componentWillMount()

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
_react3.default.createElement(_reactNative.View,{style:styles.row},
_react3.default.createElement(_reactNative.Text,null,rowData.screenName),
_react3.default.createElement(_reactNative.Button,{
title:'accept',
color:'#2196f3',
onPress:function(){
this.acceptFriend(rowData.id,rowData.screenName);
}.bind(this)}),

_react3.default.createElement(_reactNative.Button,{
title:'decline',
color:'red',
onPress:function(){
this.rejectFriend(rowData.id,rowData.screenName);
}.bind(this)})));



}},{key:'renderSeparator',value:function renderSeparator(

sectionID,rowID,adjacentRowHighlighted){
return(
_react3.default.createElement(_reactNative.View,{
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
var requestList=[].concat(_toConsumableArray(this.state.friendRequests),[{id:snapshot.key,screenName:snapshot.val()}]);
this.setState({friendRequests:requestList});
}.bind(this));
this.listenerChildRemoved=this.requestsRef.on('child_removed',function(snapshot){
var requestList=[].concat(_toConsumableArray(this.state.friendRequests));
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
_react3.default.createElement(_reactNative.ListView,{
dataSource:ds.cloneWithRows(this.state.friendRequests),
renderRow:this.renderRow,
renderSeparator:this.renderSeparator,
style:{marginTop:60},
enableEmptySections:true}));


}}]);return AcceptDeclineFriendScreen;}(_react2.Component));exports.default=AcceptDeclineFriendScreen;


AcceptDeclineFriendScreen.propTypes={
navigator:_react2.PropTypes.object.isRequired};