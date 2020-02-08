import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import PMLogin from './PrivateMessagingLoginScreen'
import PMChat from './PrivateMessagingChat'

const AppNavigator = createStackNavigator(
  {
    PMLogin: PMLogin,
    PMChat: PMChat
  },
  {
    initialRouteName: "PMLogin",
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
