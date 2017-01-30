Object.defineProperty(exports,"__esModule",{value:true});var _react2=require('react');var _react3=_interopRequireDefault(_react2);var _index=require('./../node_modules/react-transform-hmr/lib/index.js');var _index2=_interopRequireDefault(_index);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();
var _ScreenNavs=require('./screens/ScreenNavs');
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _components={App:{displayName:'App'}};var _node_modulesReactTransformHmrLibIndexJs2=(0,_index2.default)({filename:'/Users/mathieudiab/oddzReal/app/App.js',components:_components,locals:[module],imports:[_react3.default]});function _wrapComponent(id){return function(Component){return _node_modulesReactTransformHmrLibIndexJs2(Component,id);};}

var styles=_reactNative.StyleSheet.create({
screen:{
paddingTop:70,
flex:1,
backgroundColor:'#F5FCFF'}});var App=_wrapComponent('App')(function(_Component){_inherits(App,_Component);function App(){_classCallCheck(this,App);return _possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).apply(this,arguments));}_createClass(App,[{key:'render',value:function render()




{
return(
_react3.default.createElement(_reactNative.Navigator,{initialRoute:_ScreenNavs.LandingScreenNavigation,
renderScene:function renderScene(route,navigator){
var Screen=route.screen;
return(
_react3.default.createElement(Screen,{navigator:navigator,
style:styles.screen}));


},
navigationBar:
_react3.default.createElement(_reactNative.Navigator.NavigationBar,{
routeMapper:{
LeftButton:function LeftButton(route,navigator,index,navState)
{
if(route.showBackButton){
return(
_react3.default.createElement(_reactNative.TouchableHighlight,{onPress:function onPress(){return navigator.pop();}},
_react3.default.createElement(_reactNative.Text,null,'Back')));


}else{
return null;
}
},
RightButton:function RightButton(route,navigator,index,navState)
{return null;},
Title:function Title(route,navigator,index,navState)
{return _react3.default.createElement(_reactNative.Text,null,route.title);}},

style:{backgroundColor:'#2196f3'}})}));




}}]);return App;}(_react2.Component));exports.default=App;