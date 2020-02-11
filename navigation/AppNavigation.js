import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Share } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from "react-navigation-stack";
import { Button } from 'react-native-elements'
import { withFirebaseHOC } from '../config/Firebase'
import { Ionicons } from '@expo/vector-icons';


import HomePage from '../screens/HomePage'
import ProfilePage from '../screens/ProfilePage'
import MapPage from '../screens/MapPage'
import UsersMap from '../screens/UsersMap'
import Places from '../screens/Places'
import ForumPage from '../screens/ForumPage'
import SignOutPage from '../screens/SignOutPage'
import PMIndex from '../screens/PMIndex'

import Sidebar from '../screens/Sidebar'
import ChatIndex from '../screens/ChatIndex'
import ProfileIndex from '../screens/ProfileIndex'
import ForumApp from '../src/ForumApp'
import ForumChat from '../screens/ForumChat'
import MapChat from '../screens/MapChat'
import UpdateProfileScreen from '../screens/UpdateProfileScreen';
import AddNewFunFact from '../src/containers/AddNewFunFact';
import FunFactsMain from '../src/FunFactsMain';
import AddNewWorkPlacePost from '../src/containers/AddNewWorkPlacePost';
import WorkPlaceMain from '../src/WorkPlaceMain';
import AddNewProductPost from '../src/containers/AddNewProductPost';
import ProductsMain from '../src/ProductsMain';


const Drawer = createDrawerNavigator(
  {
    Home:{ screen: HomePage},
    Profile:{ screen: ProfileIndex},
    UpdateProfileScreen: {screen:UpdateProfileScreen},
    Places:{ screen: MapPage}, //can get rid of constant and put actually screen there
    Locations: {screen: Places},
    People:{ screen: UsersMap}, //can get rid of constant and put actually screen there
    Forum:{ screen: ForumApp},
    SignOut:{screen:SignOutPage},
    GroupChat: {screen: ChatIndex},
    PMChat: {screen:PMIndex},
    ForumChat: {screen: ForumChat},
    AddNewFF: {screen: AddNewFunFact},
    FunFactsMain: {screen: FunFactsMain},
    AddNewWP: {screen: AddNewWorkPlacePost},
    WorkPlaceMain: {screen: WorkPlaceMain},
    AddNewPR: {screen: AddNewProductPost},
    ProductsMain: {screen: ProductsMain},
    ForumChat: {screen: ForumChat},
    MapChat: {screen:MapChat},

  },
  {
    initialRouteName: "Home",
    drawerType: 'slide',
    headerMode: "none",
    unmountInactiveRoutes: true,
    contentComponent: props => <Sidebar {...props} />
  }
)

const AppNavigation = createStackNavigator(
  {
    Drawer : {screen: Drawer},
  },
  {
    headerMode: "none",
    initialRouteName: "Drawer",
    unmountInactiveRoutes: true

  }
)
const Header =({name, openDrawer})=> (
  <View style={styles.header}>
    <TouchableOpacity onPress={()=>openDrawer()}>
      <Ionicons name="ios-menu" size={32} />
    </TouchableOpacity>
    <Text>{name}</Text>
    <Text style={{width:50}}></Text>
  </View>
)


export default AppNavigation



const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop:40,
    alignItems:"center",
    flex:1

  },
  listItem:{
      height:60,
      alignItems:"center",
      flexDirection:"row",
  },
  title:{
      fontSize:18,
      marginLeft:20
  },
  header:{
    width:"100%",
    height:30,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:20,
  },
  profileImg:{
    width:80,
    height:80,
    borderRadius:40,
    marginTop:20
  },
  sidebarDivider:{
    height:1,
    width:"100%",
    backgroundColor:"lightgray",
    marginVertical:10
  },
});
