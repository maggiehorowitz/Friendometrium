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
import ForumPage from '../screens/ForumPage'
import SignOutPage from '../screens/SignOutPage'
import Sidebar from '../screens/Sidebar'
import ChatIndex from '../screens/ChatIndex'

// const Home = ({navigation}) => (
//   <View style={styles.container}>
//     <Header name="Home" openDrawer={navigation.openDrawer}/>
//     <HomePage/>
//   </View>
// )
//
//
//
// const Profile = ({navigation}) => (
//   <View style={styles.container}>
//     <Header name="Profile" openDrawer={navigation.openDrawer}/>
//     <ProfilePage/>
//   </View>
// )
//
// const Forum = ({navigation}) => (
//   <View style={styles.container}>
//     <Header name="Forum" openDrawer={navigation.openDrawer}/>
//     <ForumPage/>
//   </View>
// )
// const Map = ({navigation}) => (
//   <View style={styles.container}>
//     <Header name="Map" openDrawer={navigation.openDrawer}/>
//     <MapPage/>
//   </View>
// )
//
// const SignOut = ({navigation}) => (
//   <View style={styles.container}>
//     <Header name="SignOut" openDrawer={navigation.openDrawer}/>
//     <SignOutPage/>
//   </View>
// )

const Drawer = createDrawerNavigator(
  {
    Home:{ screen: HomePage},
    Profile:{ screen: ProfilePage},
    Places:{ screen: MapPage}, //can get rid of constant and put actually screen there
    People:{ screen: UsersMap}, //can get rid of constant and put actually screen there
    Forum:{ screen: ForumPage},
    SignOut:{screen:SignOutPage},
    Chat: {screen: ChatIndex}

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
