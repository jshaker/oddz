Object.defineProperty(exports,"__esModule",{value:true});var _react2=require('react');var _react3=_interopRequireDefault(_react2);var _index=require('./../../node_modules/react-transform-hmr/lib/index.js');var _index2=_interopRequireDefault(_index);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();
var _FirebaseApp=require('../FirebaseApp');var _FirebaseApp2=_interopRequireDefault(_FirebaseApp);
var _base=require('base-64');var _base2=_interopRequireDefault(_base);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _components={AddFriendsScreen:{displayName:'AddFriendsScreen'}};var _node_modulesReactTransformHmrLibIndexJs2=(0,_index2.default)({filename:'/Users/mathieudiab/oddzReal/app/screens/AddFriendsScreen.js',components:_components,locals:[module],imports:[_react3.default]});function _wrapComponent(id){return function(Component){return _node_modulesReactTransformHmrLibIndexJs2(Component,id);};}

var styles=_reactNative.StyleSheet.create({
row:{
flexDirection:'row',
padding:10,
justifyContent:'space-between'}});



var ds=new _reactNative.ListView.DataSource({rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});var AddFriendsScreen=_wrapComponent('AddFriendsScreen')(function(_Component){_inherits(AddFriendsScreen,_Component);



function AddFriendsScreen(props,context){_classCallCheck(this,AddFriendsScreen);var _this=_possibleConstructorReturn(this,(AddFriendsScreen.__proto__||Object.getPrototypeOf(AddFriendsScreen)).call(this,
props,context));
_this.state={
users:ds.cloneWithRows([])};

_this.renderRow=_this.renderRow.bind(_this);return _this;
}_createClass(AddFriendsScreen,[{key:'addFriend',value:function addFriend(

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
_react3.default.createElement(_reactNative.View,{style:styles.row},
_react3.default.createElement(_reactNative.Text,null,rowData._source.screenName),
_react3.default.createElement(_reactNative.Button,{
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
_react3.default.createElement(_reactNative.View,{
key:sectionID+'-'+rowID,
style:{
height:adjacentRowHighlighted?4:1,
backgroundColor:adjacentRowHighlighted?'#3B5998':'#CCCCCC'}}));



}},{key:'render',value:function render()

{var _this2=this;
return(
_react3.default.createElement(_reactNative.View,{style:this.props.style},
_react3.default.createElement(_reactNative.TextInput,{
style:{height:40,borderColor:'gray',borderWidth:1},
onChangeText:function onChangeText(text){return _this2.search(text);},
placeholder:'Search for friends...',
clearButtonMode:'always'}),

_react3.default.createElement(_reactNative.ListView,{
dataSource:this.state.users,
renderRow:this.renderRow,
renderSeparator:this.renderSeparator,
enableEmptySections:true})));



}}]);return AddFriendsScreen;}(_react2.Component));


AddFriendsScreen.propTypes={
navigator:_react2.PropTypes.object.isRequired};exports.default=


AddFriendsScreen;