// Import the screens
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
// Import React Navigation
import React, {Component} from 'react';
import { Button, View, Text , StyleSheet, TextInput, TouchableOpacity,Image, FlatList } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';



// Create the navigator
const navigator = createAppContainer(createStackNavigator({
  LoginPage: { screen: LoginPage }
},
{
  initialRouteName: 'LoginPage',
  headerMode: 'none'
}))

// Export it as the root component
export default navigator
