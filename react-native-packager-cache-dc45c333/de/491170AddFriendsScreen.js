Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _FirebaseApp=require('../FirebaseApp');var _FirebaseApp2=babelHelpers.interopRequireDefault(_FirebaseApp);
var _base=require('base-64');var _base2=babelHelpers.interopRequireDefault(_base);
var _reactNative=require('react-native');

var styles=_reactNative.StyleSheet.create({
row:{
flexDirection:'row',
padding:10,
justifyContent:'space-between'}});



var ds=new _reactNative.ListView.DataSource({rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});var

AddFriendsScreen=function(_Component){babelHelpers.inherits(AddFriendsScreen,_Component);

function AddFriendsScreen(props,context){babelHelpers.classCallCheck(this,AddFriendsScreen);var _this=babelHelpers.possibleConstructorReturn(this,(AddFriendsScreen.__proto__||Object.getPrototypeOf(AddFriendsScreen)).call(this,
props,context));
_this.state={
users:ds.cloneWithRows([])};

_this.renderRow=_this.renderRow.bind(_this);return _this;
}babelHelpers.createClass(AddFriendsScreen,[{key:'addFriend',value:function addFriend(

userID){var currentUserId;return regeneratorRuntime.async(function addFriend$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regeneratorRuntime.awrap(
_FirebaseApp2.default.auth().currentUser.uid);case 2:currentUserId=_context.sent;return _context.abrupt('return',
_FirebaseApp.FireDB.ref('friendRequests/'+userID+'/'+currentUserId).set(false));case 4:case'end':return _context.stop();}}},null,this);}},{key:'search',value:function search(


text){var body,response,users;return regeneratorRuntime.async(function search$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(!(
text=="")){_context2.next=2;break;}return _context2.abrupt('return',
this.setState({users:ds.cloneWithRows([])}));case 2:_context2.prev=2;


body={
"query":{
"bool":{
"must":{
"query_string":{
"query":text+'*'}}}}};_context2.next=6;return regeneratorRuntime.awrap(






fetch('https://smoke-8808408.us-east-1.bonsaisearch.net/firebase/_search',{
method:'post',
headers:{
'Authorization':'Basic '+_base2.default.encode('xl3kjbor:dkkw3rr5t2eiy7t3')},

body:JSON.stringify(body)}));case 6:response=_context2.sent;

users=JSON.parse(response._bodyInit).hits.hits;
this.setState({users:ds.cloneWithRows(users)});_context2.next=14;break;case 11:_context2.prev=11;_context2.t0=_context2['catch'](2);


console.log("error",_context2.t0);case 14:case'end':return _context2.stop();}}},null,this,[[2,11]]);}},{key:'renderRow',value:function renderRow(




rowData){
return(
_react2.default.createElement(_reactNative.View,{style:styles.row},
_react2.default.createElement(_reactNative.Text,null,rowData._source.screenName),
_react2.default.createElement(_reactNative.Button,{
title:'+',
color:'#2196f3',
onPress:function(){

this.addFriend(rowData._id).then(function(response){

}.bind(this),
function(error){

});
}.bind(this)})));



}},{key:'renderSeparator',value:function renderSeparator(

sectionID,rowID,adjacentRowHighlighted){
return(
_react2.default.createElement(_reactNative.View,{
key:sectionID+'-'+rowID,
style:{
height:adjacentRowHighlighted?4:1,
backgroundColor:adjacentRowHighlighted?'#3B5998':'#CCCCCC'}}));



}},{key:'render',value:function render()

{var _this2=this;
return(
_react2.default.createElement(_reactNative.View,{style:this.props.style},
_react2.default.createElement(_reactNative.TextInput,{
style:{height:40,borderColor:'gray',borderWidth:1},
onChangeText:function onChangeText(text){return _this2.search(text);},
placeholder:'Search for friends...',
clearButtonMode:'always'}),

_react2.default.createElement(_reactNative.ListView,{
dataSource:this.state.users,
renderRow:this.renderRow,
renderSeparator:this.renderSeparator,
enableEmptySections:true})));



}}]);return AddFriendsScreen;}(_react.Component);


AddFriendsScreen.propTypes={
navigator:_react.PropTypes.object.isRequired};exports.default=


AddFriendsScreen;