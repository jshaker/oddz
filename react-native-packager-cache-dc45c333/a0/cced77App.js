Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _ScreenNavs=require('./screens/ScreenNavs');
var _reactNative=require('react-native');

var styles=_reactNative.StyleSheet.create({
screen:{
paddingTop:70,
flex:1,
backgroundColor:'#F5FCFF'}});var



App=function(_Component){babelHelpers.inherits(App,_Component);function App(){babelHelpers.classCallCheck(this,App);return babelHelpers.possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).apply(this,arguments));}babelHelpers.createClass(App,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactNative.Navigator,{initialRoute:_ScreenNavs.LandingScreenNavigation,
renderScene:function renderScene(route,navigator){
var Screen=route.screen;
return(
_react2.default.createElement(Screen,{navigator:navigator,
style:styles.screen}));


},
navigationBar:
_react2.default.createElement(_reactNative.Navigator.NavigationBar,{
routeMapper:{
LeftButton:function LeftButton(route,navigator,index,navState)
{
if(route.showBackButton){
return(
_react2.default.createElement(_reactNative.TouchableHighlight,{onPress:function onPress(){return navigator.pop();}},
_react2.default.createElement(_reactNative.Text,null,'Back')));


}else{
return null;
}
},
RightButton:function RightButton(route,navigator,index,navState)
{return null;},
Title:function Title(route,navigator,index,navState)
{return _react2.default.createElement(_reactNative.Text,null,route.title);}},

style:{backgroundColor:'#2196f3'}})}));




}}]);return App;}(_react.Component);exports.default=App;