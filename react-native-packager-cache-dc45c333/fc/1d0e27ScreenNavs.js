Object.defineProperty(exports,"__esModule",{value:true});exports.AcceptDeclineFriendScreenNavigation=exports.MyFriendsScreenNavigation=exports.LandingScreenNavigation=exports.AddFriendsScreenNavigation=exports.RegisterScreenNavigation=exports.LoginScreenNavigation=exports.HomeScreenNavigation=undefined;var _HomeScreen=require('./HomeScreen');var _HomeScreen2=_interopRequireDefault(_HomeScreen);
var _LoginScreen=require('./LoginScreen');var _LoginScreen2=_interopRequireDefault(_LoginScreen);
var _RegisterScreen=require('./RegisterScreen');var _RegisterScreen2=_interopRequireDefault(_RegisterScreen);
var _AddFriendsScreen=require('./AddFriendsScreen');var _AddFriendsScreen2=_interopRequireDefault(_AddFriendsScreen);
var _LandingScreen=require('./LandingScreen');var _LandingScreen2=_interopRequireDefault(_LandingScreen);
var _MyFriendsScreen=require('./MyFriendsScreen');var _MyFriendsScreen2=_interopRequireDefault(_MyFriendsScreen);
var _AcceptDeclineFriendScreen=require('./AcceptDeclineFriendScreen');var _AcceptDeclineFriendScreen2=_interopRequireDefault(_AcceptDeclineFriendScreen);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var HomeScreenNavigation=exports.HomeScreenNavigation={screen:_HomeScreen2.default,title:'Home',showBackButton:false};
var LoginScreenNavigation=exports.LoginScreenNavigation={screen:_LoginScreen2.default,title:'Login',showBackButton:true};
var RegisterScreenNavigation=exports.RegisterScreenNavigation={screen:_RegisterScreen2.default,title:'Sign Up',showBackButton:true};
var AddFriendsScreenNavigation=exports.AddFriendsScreenNavigation={screen:_AddFriendsScreen2.default,title:'Add Friends',showBackButton:true};
var LandingScreenNavigation=exports.LandingScreenNavigation={screen:_LandingScreen2.default,title:'OddZ',showBackButton:false};
var MyFriendsScreenNavigation=exports.MyFriendsScreenNavigation={screen:_MyFriendsScreen2.default,title:'My Friends',showBackButton:true};
var AcceptDeclineFriendScreenNavigation=exports.AcceptDeclineFriendScreenNavigation={screen:_AcceptDeclineFriendScreen2.default,title:'Friend Requests',showBackButton:true};