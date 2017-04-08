Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactRedux=require('react-redux');
var _FirebaseApp=require('../FirebaseApp');
var _reactNative=require('react-native');
var _FindFriendModal=require('../modals/FindFriendModal');var _FindFriendModal2=babelHelpers.interopRequireDefault(_FindFriendModal);
var _ScreenNavs=require('./ScreenNavs');
var _reactNativeElements=require('react-native-elements');

var styles=_reactNative.StyleSheet.create({
container:{
padding:10,
flexDirection:'column',
justifyContent:'space-around',
flex:1},

titleInput:{
height:40,
borderColor:'black',
borderWidth:1},

descriptionInput:{
height:120,
borderColor:'blue',
borderWidth:1}});var



ChallengeScreen=function(_Component){babelHelpers.inherits(ChallengeScreen,_Component);

function ChallengeScreen(props){babelHelpers.classCallCheck(this,ChallengeScreen);var _this=babelHelpers.possibleConstructorReturn(this,(ChallengeScreen.__proto__||Object.getPrototypeOf(ChallengeScreen)).call(this,
props));
_this.state={
title:'',
description:'',
challengerID:'',
challengeeID:'',
modalVisible:false};


_this.handleTouch=_this.handleTouch.bind(_this);
_this.closeModal=_this.closeModal.bind(_this);
_this.sendChallenge=_this.sendChallenge.bind(_this);return _this;
}babelHelpers.createClass(ChallengeScreen,[{key:'sendChallenge',value:function sendChallenge(

data){var challengeKey,challengerData,challengeeData,updates;return regeneratorRuntime.async(function sendChallenge$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regeneratorRuntime.awrap(
_FirebaseApp.FireDB.ref('challenges/'+data.challengerID).push().key);case 2:challengeKey=_context.sent;
challengerData={
title:data.title,
description:data.description,
challengerID:data.challengerID};

challengeeData={
title:data.title,
description:data.description,
challengeeID:data.challengeeID};

updates={};
updates['challenges/'+data.challengerID+'/'+challengeKey]=challengeeData;
updates['challenges/'+data.challengeeID+'/'+challengeKey]=challengerData;
_FirebaseApp.FireDB.ref().update(updates).then(function(){
var challengeDetailsScreen=babelHelpers.extends({},_ScreenNavs.DetailedChallengeScreenNavigation,{challengeID:challengeKey});
this.props.navigator.replace(challengeDetailsScreen);
}.bind(this));case 9:case'end':return _context.stop();}}},null,this);}},{key:'handleTouch',value:function handleTouch(


data){
this.setState({modalVisible:false,challengeeID:data,challengerID:this.props.userKey});
}},{key:'closeModal',value:function closeModal()

{
this.setState({modalVisible:false});
}},{key:'render',value:function render()

{var _this2=this;
return(
_react2.default.createElement(_reactNative.View,{style:this.props.style},
_react2.default.createElement(_FindFriendModal2.default,{visible:this.state.modalVisible,
handleTouch:this.handleTouch,
closeModal:this.closeModal}),

_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNativeElements.FormLabel,null,' Title '),
_react2.default.createElement(_reactNativeElements.FormInput,{

onChangeText:function onChangeText(title){return _this2.setState({title:title});},
value:this.state.title}),

_react2.default.createElement(_reactNativeElements.FormLabel,null,' Description '),
_react2.default.createElement(_reactNativeElements.FormInput,{
style:styles.descriptionInput,
multiline:true,
numberOfLines:10,
onChangeText:function onChangeText(description){return _this2.setState({description:description});},
value:this.state.description}),

_react2.default.createElement(_reactNativeElements.FormLabel,null,' Friend Challenged: ',this.state.challengeeID,' ')),

_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNativeElements.Button,{
large:true,
iconLeft:true,
icon:{name:'accessibility'},
backgroundColor:'#2196f3',
title:'SELECT FRIEND',
onPress:function onPress(){
_this2.setState({modalVisible:true});
}}),
_react2.default.createElement(_reactNativeElements.Button,{
large:true,
iconLeft:true,
icon:{name:'dice-6',type:'material-community'},
backgroundColor:'#ff5252',
title:'SEND CHALLENGE',
disabled:!this.state.challengeeID||!this.state.title||!this.state.description,
onPress:function onPress(){
_this2.sendChallenge(_this2.state);
}})))));




}}]);return ChallengeScreen;}(_react.Component);


ChallengeScreen.propTypes={
navigator:_react.PropTypes.object.isRequired};



function mapStateToProps(state,ownProps){
return{
userKey:state.userKey};

}exports.default=

(0,_reactRedux.connect)(mapStateToProps)(ChallengeScreen);