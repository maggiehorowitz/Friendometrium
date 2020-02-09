import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import PMLogin from './PrivateMessagingLoginScreen'
import PMChat from './PrivateMessagingChat'
import ForumChat from './ForumChat'

const AppNavigator = createStackNavigator(
  {
    PMLogin: PMLogin,
    PMChat: PMChat,
    FourmChat: ForumChat,

  },
  {
    initialRouteName: "PMLogin",
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
