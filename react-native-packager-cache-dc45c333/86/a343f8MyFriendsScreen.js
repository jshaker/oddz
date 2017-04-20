Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactRedux=require('react-redux');
var _reactNative=require('react-native');
var _reactNativeElements=require('react-native-elements');

var styles=_reactNative.StyleSheet.create({
row:{
flexDirection:'row',
padding:10,
justifyContent:'space-between'}});



var ds=new _reactNative.ListView.DataSource({rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});var

MyFriendsScreen=function(_Component){babelHelpers.inherits(MyFriendsScreen,_Component);


function MyFriendsScreen(props,context){babelHelpers.classCallCheck(this,MyFriendsScreen);var _this=babelHelpers.possibleConstructorReturn(this,(MyFriendsScreen.__proto__||Object.getPrototypeOf(MyFriendsScreen)).call(this,
props,context));

_this.renderRow=_this.renderRow.bind(_this);
_this.viewUserInfo=_this.viewUserInfo.bind(_this);return _this;
}babelHelpers.createClass(MyFriendsScreen,[{key:'viewUserInfo',value:function viewUserInfo(

userId){

}},{key:'renderRow',value:function renderRow(

rowData,sectionID){var _this2=this;
return(
_react2.default.createElement(_reactNativeElements.ListItem,{
key:sectionID,
title:rowData.userInfo.screenName,

onPress:function onPress(){return _this2.viewUserInfo();}}));


}},{key:'renderSeparator',value:function renderSeparator(

sectionID,rowID,adjacentRowHighlighted){
return(
_react2.default.createElement(_reactNative.View,{
key:sectionID+'-'+rowID,
style:{
height:adjacentRowHighlighted?4:1,
backgroundColor:adjacentRowHighlighted?'#3B5998':'#CCCCCC'}}));



}},{key:'render',value:function render()

{
var friendsList=Object.keys(this.props.friendsList).map(function(id){
return{id:id,userInfo:this.props.friendsList[id]};
}.bind(this));

return(
_react2.default.createElement(_reactNative.View,{style:this.props.style},
_react2.default.createElement(_reactNativeElements.List,null,
_react2.default.createElement(_reactNative.ListView,{
dataSource:ds.cloneWithRows(friendsList),
renderRow:this.renderRow,
renderSeparator:this.renderSeparator,
enableEmptySections:true}))));




}}]);return MyFriendsScreen;}(_react.Component);



MyFriendsScreen.propTypes={
navigator:_react.PropTypes.object.isRequired,
topLevelNavigator:_react.PropTypes.object.isRequired};


function mapStateToProps(state,ownProps){
return{
friendsList:state.friendsList};

}exports.default=

(0,_reactRedux.connect)(mapStateToProps,null)(MyFriendsScreen);