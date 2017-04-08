Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactRedux=require('react-redux');
var _FirebaseApp=require('../FirebaseApp');
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

FriendRequestsScreen=function(_Component){babelHelpers.inherits(FriendRequestsScreen,_Component);

function FriendRequestsScreen(props,context){babelHelpers.classCallCheck(this,FriendRequestsScreen);var _this=babelHelpers.possibleConstructorReturn(this,(FriendRequestsScreen.__proto__||Object.getPrototypeOf(FriendRequestsScreen)).call(this,
props,context));
_this.state={
friendRequests:[]};


_this.goBack=_this.goBack.bind(_this);
_this.renderRow=_this.renderRow.bind(_this);
_this.acceptFriend=_this.acceptFriend.bind(_this);
_this.rejectFriend=_this.rejectFriend.bind(_this);return _this;
}babelHelpers.createClass(FriendRequestsScreen,[{key:'renderRow',value:function renderRow(

rowData,sectionID){
return(
_react2.default.createElement(_reactNative.View,{style:styles.row},
_react2.default.createElement(_reactNative.Text,null,rowData.screenName),
_react2.default.createElement(_reactNative.Button,{
title:'accept',
color:'#2196f3',
onPress:function(){
this.acceptFriend(rowData.id,rowData.userInfo.screenName);
}.bind(this)}),

_react2.default.createElement(_reactNative.Button,{
title:'decline',
color:'red',
onPress:function(){
this.rejectFriend(rowData.id,rowData.userInfo.screenName);
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
}},{key:'acceptFriend',value:function acceptFriend(

friendID){var friendRef;return regeneratorRuntime.async(function acceptFriend$(_context){while(1){switch(_context.prev=_context.next){case 0:
friendRef=_FirebaseApp.FireDB.ref('users/'+friendID);
friendRef.once('value',function(friendInfo){
_FirebaseApp.FireDB.ref('friends/'+friendID+'/'+this.props.userKey).set(this.props.userInfo);
_FirebaseApp.FireDB.ref('friends/'+this.props.userKey+'/'+friendID).set(friendInfo.val());
_FirebaseApp.FireDB.ref('friendRequests/'+this.props.userKey+'/'+friendID).set(null);
}.bind(this));case 2:case'end':return _context.stop();}}},null,this);}},{key:'rejectFriend',value:function rejectFriend(


friendID,friendName){return regeneratorRuntime.async(function rejectFriend$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:return _context2.abrupt('return',
_FirebaseApp.FireDB.ref('friendRequests/'+this.props.userKey+'/'+friendID).set(null));case 1:case'end':return _context2.stop();}}},null,this);}},{key:'render',value:function render()




{

var friendRequests=Object.keys(this.props.friendRequests).map(function(id){
return{id:id,userInfo:this.props.friendRequests[id]};
}.bind(this));


return(
_react2.default.createElement(_reactNative.ListView,{
dataSource:ds.cloneWithRows(friendRequests),
renderRow:this.renderRow,
renderSeparator:this.renderSeparator,
style:this.props.style,
enableEmptySections:true}));


}}]);return FriendRequestsScreen;}(_react.Component);


FriendRequestsScreen.propTypes={
navigator:_react.PropTypes.object.isRequired,
topLevelNavigator:_react.PropTypes.object.isRequired};



function mapStateToProps(state,ownProps){
return{
userKey:state.userKey,
userInfo:state.userInfo,
friendRequests:state.friendRequests};

}exports.default=

(0,_reactRedux.connect)(mapStateToProps)(FriendRequestsScreen);