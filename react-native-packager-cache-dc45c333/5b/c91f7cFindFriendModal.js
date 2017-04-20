Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactRedux=require('react-redux');
var _FirebaseApp=require('../FirebaseApp');
var _reactNativeElements=require('react-native-elements');

var styles=_reactNative.StyleSheet.create({
row:{
flexDirection:'row',
padding:10,
justifyContent:'space-between'}});



var ds=new _reactNative.ListView.DataSource({rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});var

FindFriendModal=function(_Component){babelHelpers.inherits(FindFriendModal,_Component);


function FindFriendModal(props,context){babelHelpers.classCallCheck(this,FindFriendModal);var _this=babelHelpers.possibleConstructorReturn(this,(FindFriendModal.__proto__||Object.getPrototypeOf(FindFriendModal)).call(this,
props,context));
_this.state={
friends:[]};


_this.friendsRef=null;
_this.listener=null;

_this.listenUserFriends=_this.listenUserFriends.bind(_this);
_this.unlistenUserFriends=_this.unlistenUserFriends.bind(_this);
_this.renderRow=_this.renderRow.bind(_this);return _this;
}babelHelpers.createClass(FindFriendModal,[{key:'componentWillMount',value:function componentWillMount()

{
this.listenUserFriends();
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this.unlistenUserFriends();
}},{key:'renderRow',value:function renderRow(

rowData){var _this2=this;
return(
_react2.default.createElement(_reactNative.TouchableHighlight,{onPress:function onPress(){return _this2.props.handleTouch(rowData.key);}},
_react2.default.createElement(_reactNative.View,{style:styles.row},
_react2.default.createElement(_reactNative.Text,null,rowData.screenName))));



}},{key:'renderSeparator',value:function renderSeparator(

sectionID,rowID,adjacentRowHighlighted){
return(
_react2.default.createElement(_reactNative.View,{
key:sectionID+'-'+rowID,
style:{
height:adjacentRowHighlighted?4:1,
backgroundColor:adjacentRowHighlighted?'#3B5998':'#CCCCCC'}}));



}},{key:'listenUserFriends',value:function listenUserFriends(){return regeneratorRuntime.async(function listenUserFriends$(_context){while(1){switch(_context.prev=_context.next){case 0:


this.friendsRef=_FirebaseApp.FireDB.ref('friends/'+this.props.userKey);
this.listener=this.friendsRef.on('child_added',function(data){
var friendsList=[].concat(babelHelpers.toConsumableArray(this.state.friends),[{screenName:data.val().screenName,key:data.key}]);
this.setState({friends:friendsList});
}.bind(this));case 2:case'end':return _context.stop();}}},null,this);}},{key:'unlistenUserFriends',value:function unlistenUserFriends()


{
this.friendsRef.off('child_added',this.listener);
}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.Modal,{
animationType:"slide",
transparent:false,
visible:this.props.visible,
onRequestClose:function onRequestClose(){alert("Modal has been closed.");}},

_react2.default.createElement(_reactNative.View,{style:{marginTop:64,flex:1,flexDirection:'column',justifyContent:'space-around'}},
_react2.default.createElement(_reactNative.ListView,{
dataSource:ds.cloneWithRows(this.state.friends),
renderRow:this.renderRow,
renderSeparator:this.renderSeparator,
enableEmptySections:true}),

_react2.default.createElement(_reactNative.View,null,


_react2.default.createElement(_reactNativeElements.Button,{
medium:true,
backgroundColor:'#ff5252',
title:'CLOSE',
onPress:this.props.closeModal})))));






}}]);return FindFriendModal;}(_react.Component);


FindFriendModal.propTypes={
visible:_react.PropTypes.bool,
handleTouch:_react.PropTypes.func,
closeModal:_react.PropTypes.func};


function mapStateToProps(state,ownProps){
return{
userKey:state.userKey,
userInfo:state.userInfo};

}exports.default=

(0,_reactRedux.connect)(mapStateToProps)(FindFriendModal);