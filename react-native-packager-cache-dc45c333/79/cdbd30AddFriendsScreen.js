Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactRedux=require('react-redux');
var _FirebaseApp=require('../FirebaseApp');
var _base=require('base-64');var _base2=babelHelpers.interopRequireDefault(_base);
var _reactNative=require('react-native');
var _reactNativeElements=require('react-native-elements');

var styles=_reactNative.StyleSheet.create({
row:{
flexDirection:'row',
padding:10,
justifyContent:'space-between'},

mainContainer:{
flex:1,
flexDirection:'column',

backgroundColor:'white'}});



var ds=new _reactNative.ListView.DataSource({rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});var

AddFriendsScreen=function(_Component){babelHelpers.inherits(AddFriendsScreen,_Component);

function AddFriendsScreen(props,context){babelHelpers.classCallCheck(this,AddFriendsScreen);var _this=babelHelpers.possibleConstructorReturn(this,(AddFriendsScreen.__proto__||Object.getPrototypeOf(AddFriendsScreen)).call(this,
props,context));
_this.state={
users:[],
userNode:{}};

_this.renderRow=_this.renderRow.bind(_this);return _this;
}babelHelpers.createClass(AddFriendsScreen,[{key:'addFriend',value:function addFriend(

userID){
return _FirebaseApp.FireDB.ref('friendRequests/'+userID+'/'+this.props.userKey).set(this.props.userInfo);
}},{key:'search',value:function search(

text){var body,response,users;return regeneratorRuntime.async(function search$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!(
text=="")){_context.next=2;break;}return _context.abrupt('return',
this.setState({users:[]}));case 2:_context.prev=2;


body={
"query":{
"bool":{
"must":{
"query_string":{
"query":text+'*'}}}}};_context.next=6;return regeneratorRuntime.awrap(






fetch('https://smoke-8808408.us-east-1.bonsaisearch.net/firebase/_search',{
method:'post',
headers:{
'Authorization':'Basic '+_base2.default.encode('xl3kjbor:dkkw3rr5t2eiy7t3')},

body:JSON.stringify(body)}));case 6:response=_context.sent;

users=JSON.parse(response._bodyInit).hits.hits;
this.setState({users:users});_context.next=14;break;case 11:_context.prev=11;_context.t0=_context['catch'](2);


console.log("error",_context.t0);case 14:case'end':return _context.stop();}}},null,this,[[2,11]]);}},{key:'renderRow',value:function renderRow(



rowData,sectionID){
return(


_react2.default.createElement(_reactNativeElements.ListItem,{
key:sectionID,
title:rowData._source.screenName,
rightIcon:{name:'account-plus',type:'material-community',color:'#2196F3'},
onPress:function(){
if(this.props.friendRequests[rowData._id]){
var friendRef=_FirebaseApp.FireDB.ref('users/'+rowData._id);
friendRef.once('value',function(friendInfo){
_FirebaseApp.FireDB.ref('friends/'+rowData._id+'/'+this.props.userKey).set(this.props.userInfo);
_FirebaseApp.FireDB.ref('friends/'+this.props.userKey+'/'+rowData._id).set(friendInfo.val());
_FirebaseApp.FireDB.ref('friendRequests/'+this.props.userKey+'/'+rowData._id).set(null);
}.bind(this));
}else
{

this.addFriend(rowData._id).then(function(response){

}.bind(this),
function(error){

});
}
}.bind(this)}));



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

var users=this.state.users.filter(function(user){
return this.props.friendsList[user._id]==null;
}.bind(this));

return(
_react2.default.createElement(_reactNative.View,{style:this.props.style},
_react2.default.createElement(_reactNative.View,{style:styles.mainContainer},
_react2.default.createElement(_reactNativeElements.SearchBar,{
lightTheme:true,
onChangeText:function onChangeText(text){return _this2.search(text);},
placeholder:'Search for friends...',
style:{backgroundColor:'yellow'}}),
_react2.default.createElement(_reactNativeElements.List,{style:{alignSelf:'stretch'}},
_react2.default.createElement(_reactNative.ListView,{
renderRow:this.renderRow,
dataSource:ds.cloneWithRows(users),
renderSeparator:this.renderSeparator,
enableEmptySections:true})))));





}}]);return AddFriendsScreen;}(_react.Component);


AddFriendsScreen.propTypes={
navigator:_react.PropTypes.object.isRequired,
topLevelNavigator:_react.PropTypes.object.isRequired};


function mapStateToProps(state,ownProps){
return{
userInfo:state.userInfo,
userKey:state.userKey,
friendsList:state.friendsList,
friendRequests:state.friendRequests};

}exports.default=

(0,_reactRedux.connect)(mapStateToProps)(AddFriendsScreen);