import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import ChatLoginScreen from './ChatLoginScreen'
import FunFactsChat from './FunFactsChat'
import AdviceChat from './AdviceChat'
import ProductReviewChat from './ProductReviewChat'

const AppNavigator = createStackNavigator(
  {
    ChatLogin: ChatLoginScreen,
    FunFactsChat: FunFactsChat,
    AdviceChat: AdviceChat,
    ProductReviewChat: ProductReviewChat
  },
  {
    initialRouteName: "ChatLogin",
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
