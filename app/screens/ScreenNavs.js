import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import AddFriendsScreen from './AddFriendsScreen';
import LandingScreen from './LandingScreen';
import MyFriendsScreen from './MyFriendsScreen';
import AcceptDeclineFriendScreen from './AcceptDeclineFriendScreen';

export const HomeScreenNavigation = {screen: HomeScreen, title: 'Home', showBackButton: false};
export const LoginScreenNavigation = {screen: LoginScreen, title: 'Login', showBackButton: true};
export const RegisterScreenNavigation = {screen: RegisterScreen, title: 'Sign Up', showBackButton: true};
export const AddFriendsScreenNavigation = {screen: AddFriendsScreen, title: 'Add Friends', showBackButton: true};
export const LandingScreenNavigation = {screen: LandingScreen, title: 'OddZ', showBackButton:false};
export const MyFriendsScreenNavigation = {screen:MyFriendsScreen, title: 'My Friends', showBackButton: true};
export const AcceptDeclineFriendScreenNavigation = {screen:AcceptDeclineFriendScreen, title: 'Friend Requests', showBackButton: true};
