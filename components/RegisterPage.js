




import React, {Component} from 'react';
import { Button, View, Text , StyleSheet, TextInput, TouchableOpacity,Image, FlatList } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';



export default class HomePage extends Component{
  render(){
    return(
      <View style ={styles.container}>
        <Text style = {styles.text}> Welcome to Registration Page </Text>
        <Text style = {styles.text}> Fixing a bug, under construction </Text>
        <Button
          title = "Go back to login"
          color = '#1abc9c'
          onPress = {() =>this.props.navigation.navigate('Login')}
          />
      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    color:"black"
  }
});
