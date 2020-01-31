import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import LoginToChatScreen from './LoginToChatScreen'
import ChatScreen from './ChatScreen'

const AppNavigator = createStackNavigator(
  {
    Login: LoginToChatScreen,
    Chat: ChatScreen
  },
  {
    headerMode: "none",
  }
);

export default createAppContainer(AppNavigator);
