import React, {Component} from 'react';
import { Button, View, Text , StyleSheet, TextInput, TouchableOpacity,Image, FlatList } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';

export class LoginPage extends Component{
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.logo}>Friendometrium</Text>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder= "Email..."
            placeholderTextColor="#003f5c"
            returnKeyType = "next"
            onSubmitEditing= { () => {this.passwordInput.focus();}}
            keyboardType = "email-address"
            autoCapitalize = "none"
            autoCorrect = {false}
            />
          </View>
          <View style ={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder= "password..."
            placeholderTextColor="#003f5c"
            returnKeyType = "go"
            secureTextEntry
            ref = {(input) => {this.passwordInput = input;}}
          />
          </View>
          <TouchableOpacity style = {styles.loginBtn}
          onPress = {() => this.props.navigation.navigate('Home')}>
            <Text style = {styles.buttontext}> LOGIN </Text>
          </TouchableOpacity>
          <Button
            title = "Register Here"
            color = '#1abc9c'
            onPress = {() =>this.props.navigation.navigate('Register')}
            />
        </View>

    );
  }
}

export default class App extends Component{
  render(){
    return(
      <AppStackNavigator />

    );
  }
}

const AppStackNavigator = createAppContainer(createStackNavigator({
  Login : {screen:LoginPage},
  Register: {screen:RegisterPage},
  Home: {screen:HomePage}

},
{initialRouteName: 'Login',
headerMode: 'none'}
))


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      fontWeight:"bold",
      fontSize:46,
      color:"#fb5b5a",
      marginBottom:40
    },
    inputView:{
      width:"80%",
      backgroundColor:"#B0C4DE",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"black"
    },
    forgot:{
      color:"white",
      fontSize:11
    },
    loginBtn:{
      width:"80%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    loginText:{
      color:"white"
    }
  });

//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#003f5c',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputView:{
//     width:"80%",
//     backgroundColor:"#B0C4DE",
//     borderRadius:25,
//     height:50,
//     marginBottom:20,
//     justifyContent:"center",
//     padding:20
//   },
//   inputText:{
//     height:50,
//     color:"black"
//   },
//   buttoncontainer:{
//     width:"80%",
//     backgroundColor:"#fb5b5a",
//     borderRadius:25,
//     height:50,
//     alignItems:"center",
//     justifyContent:"center",
//     marginTop:40,
//     marginBottom:10
//   },
//   buttontext:{
//     textAlign: 'center',
//     color:"white"
//   },
//   logo:{
//       fontWeight:"bold",
//       fontSize:46,
//       color:"#fb5b5a",
//       marginBottom:40
//     },
//   textfields:{
//     width:"80%",
//     backgroundColor:"#B0C4DE",
//     borderRadius:25,
//     height:50,
//     marginBottom:20,
//     justifyContent:"center",
//     padding:20
//     }
//   });
