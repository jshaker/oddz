Object.defineProperty(exports,"__esModule",{value:true});var _react2=require('react');var _react3=_interopRequireDefault(_react2);var _index=require('./../../node_modules/react-transform-hmr/lib/index.js');var _index2=_interopRequireDefault(_index);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();
var _reactNative=require('react-native');
var _FirebaseApp=require('../FirebaseApp');var _FirebaseApp2=_interopRequireDefault(_FirebaseApp);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _components={MyFriendsScreen:{displayName:'MyFriendsScreen'}};var _node_modulesReactTransformHmrLibIndexJs2=(0,_index2.default)({filename:'/Users/mathieudiab/oddzReal/app/screens/MyFriendsScreen.js',components:_components,locals:[module],imports:[_react3.default]});function _wrapComponent(id){return function(Component){return _node_modulesReactTransformHmrLibIndexJs2(Component,id);};}

var styles=_reactNative.StyleSheet.create({
row:{
flexDirection:'row',
padding:10,
justifyContent:'space-between'}});



var ds=new _reactNative.ListView.DataSource({rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});var MyFriendsScreen=_wrapComponent('MyFriendsScreen')(function(_Component){_inherits(MyFriendsScreen,_Component);




function MyFriendsScreen(props,context){_classCallCheck(this,MyFriendsScreen);var _this=_possibleConstructorReturn(this,(MyFriendsScreen.__proto__||Object.getPrototypeOf(MyFriendsScreen)).call(this,
props,context));
_this.state={
friends:[]};


_this.friendsRef=null;
_this.listener=null;


_this.renderRow=_this.renderRow.bind(_this);
_this.listenUserFriends=_this.listenUserFriends.bind(_this);
_this.unlistenUserFriends=_this.unlistenUserFriends.bind(_this);
_this.viewUserInfo=_this.viewUserInfo.bind(_this);return _this;
}_createClass(MyFriendsScreen,[{key:'viewUserInfo',value:function viewUserInfo(

userId){

}},{key:'renderRow',value:function renderRow(

rowData){
return(
_react3.default.createElement(_reactNative.View,{style:styles.row},
_react3.default.createElement(_reactNative.Text,null,rowData.screenName),
_react3.default.createElement(_reactNative.Button,{
title:'>',
color:'#2196f3',
onPress:function(){
this.viewUserInfo(rowData.key);
}.bind(this)})));



}},{key:'renderSeparator',value:function renderSeparator(

sectionID,rowID,adjacentRowHighlighted){
return(
_react3.default.createElement(_reactNative.View,{
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
var friendsList=[].concat(_toConsumableArray(this.state.friends),[{screenName:data.val(),key:data.key}]);
this.setState({friends:friendsList});
}.bind(this));case 7:case'end':return _context.stop();}}},null,this);}},{key:'unlistenUserFriends',value:function unlistenUserFriends()


{
this.friendsRef.off('child_added',this.listener);
}},{key:'render',value:function render()

{
return(
_react3.default.createElement(_reactNative.View,{style:this.props.style},
_react3.default.createElement(_reactNative.ListView,{
dataSource:ds.cloneWithRows(this.state.friends),
renderRow:this.renderRow,
renderSeparator:this.renderSeparator,
enableEmptySections:true})));



}}]);return MyFriendsScreen;}(_react2.Component));



MyFriendsScreen.propTypes={
navigator:_react2.PropTypes.object.isRequired};exports.default=


MyFriendsScreen;