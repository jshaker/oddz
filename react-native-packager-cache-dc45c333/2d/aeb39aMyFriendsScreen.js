Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _FirebaseApp=require('../FirebaseApp');var _FirebaseApp2=babelHelpers.interopRequireDefault(_FirebaseApp);

var styles=_reactNative.StyleSheet.create({
row:{
flexDirection:'row',
padding:10,
justifyContent:'space-between'}});



var ds=new _reactNative.ListView.DataSource({rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});var

MyFriendsScreen=function(_Component){babelHelpers.inherits(MyFriendsScreen,_Component);


function MyFriendsScreen(props,context){babelHelpers.classCallCheck(this,MyFriendsScreen);var _this=babelHelpers.possibleConstructorReturn(this,(MyFriendsScreen.__proto__||Object.getPrototypeOf(MyFriendsScreen)).call(this,
props,context));
_this.state={
friends:[]};


_this.friendsRef=null;
_this.listener=null;


_this.renderRow=_this.renderRow.bind(_this);
_this.listenUserFriends=_this.listenUserFriends.bind(_this);
_this.unlistenUserFriends=_this.unlistenUserFriends.bind(_this);
_this.viewUserInfo=_this.viewUserInfo.bind(_this);return _this;
}babelHelpers.createClass(MyFriendsScreen,[{key:'viewUserInfo',value:function viewUserInfo(

userId){

}},{key:'renderRow',value:function renderRow(

rowData){
return(
_react2.default.createElement(_reactNative.View,{style:styles.row},
_react2.default.createElement(_reactNative.Text,null,rowData.screenName),
_react2.default.createElement(_reactNative.Button,{
title:'>',
color:'#2196f3',
onPress:function(){
this.viewUserInfo(rowData.key);
}.bind(this)})));



}},{key:'renderSeparator',value:function renderSeparator(

sectionID,rowID,adjacentRowHighlighted){
return(
_react2.default.createElement(_reactNative.View,{
key:sectionID+'-'+rowID,
style:{
height:adjacentRowHighlighted?4:1,
backgroundColor:adjacentRowHighlighted?'#3B5998':'#CCCCCC'}}));



}},{key:'componentWillMount',value:function componentWillMount()

{
this.listenUserFriends();
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this.unlistenUserFriends();
}},{key:'listenUserFriends',value:function listenUserFriends(){return regeneratorRuntime.async(function listenUserFriends$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.t0=_FirebaseApp.FireDB;_context.next=3;return regeneratorRuntime.awrap(


_FirebaseApp2.default.auth().currentUser.uid);case 3:_context.t1=_context.sent;_context.t2='friends/'+_context.t1;this.friendsRef=_context.t0.ref.call(_context.t0,_context.t2);
this.listener=this.friendsRef.on('child_added',function(data){
var friendsList=[].concat(babelHelpers.toConsumableArray(this.state.friends),[{screenName:data.val(),key:data.key}]);
this.setState({friends:friendsList});
}.bind(this));case 7:case'end':return _context.stop();}}},null,this);}},{key:'unlistenUserFriends',value:function unlistenUserFriends()


{
this.friendsRef.off('child_added',this.listener);
}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.View,{style:this.props.style},
_react2.default.createElement(_reactNative.ListView,{
dataSource:ds.cloneWithRows(this.state.friends),
renderRow:this.renderRow,
renderSeparator:this.renderSeparator,
enableEmptySections:true})));



}}]);return MyFriendsScreen;}(_react.Component);



MyFriendsScreen.propTypes={
navigator:_react.PropTypes.object.isRequired};exports.default=


MyFriendsScreen;