import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import LoginScreen from './LoginScreen'
import ChatScreen from './ChatScreen'
import ChatScreen2 from './ChatScreen2'

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Chat: ChatScreen,
    Chat2: ChatScreen2
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
