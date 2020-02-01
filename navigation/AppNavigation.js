import { createStackNavigator } from 'react-navigation-stack'
import NavDrawer from '../screens/NavDrawer'
import ProfilePage from '../screens/ProfilePage'

const AppNavigation = createStackNavigator(
  {
    Home: { screen: NavDrawer },
    Profile: { screen: ProfilePage },

  },
  {
    initialRouteName: 'Profile',
    headerMode: 'none'
  }

)

export default AppNavigation
