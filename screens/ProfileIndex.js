import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import ProfilePage from './ProfilePage';
import ProfileUpdate from './UpdateProfileScreen';

const AppNavigator = createStackNavigator(
  {
    ProfilePage: ProfilePage,
    ProfileUpdate: ProfileUpdate
  },
  {
    initialRouteName: "ProfilePage",
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
