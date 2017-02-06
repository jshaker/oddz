import HomeScreen from './HomeScreen';
import LoginScreen from '../landingscreens/LoginScreen';
import RegisterScreen from '../landingscreens/RegisterScreen';
import AddFriendsScreen from './AddFriendsScreen';
import LandingScreen from '../landingscreens/LandingScreen';
import MyFriendsScreen from './MyFriendsScreen';
import AcceptDeclineFriendScreen from './FriendRequestsScreen';

export const HomeScreenNavigation = {screen: HomeScreen, title: 'Home', showBackButton: false};
export const AddFriendsScreenNavigation = {screen: AddFriendsScreen, title: 'Add Friends', showBackButton: true};
export const MyFriendsScreenNavigation = {screen:MyFriendsScreen, title: 'My Friends', showBackButton: true};
export const AcceptDeclineFriendScreenNavigation = {screen:AcceptDeclineFriendScreen, title: 'Friend Requests', showBackButton: true};
