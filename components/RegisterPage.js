// import React, {Component} from 'react';
// import { Button, View, Text , StyleSheet, TextInput, TouchableOpacity,Image, FlatList } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginPage from './LoginPage';
//


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






// export default class RegisterPage extends Component{
//   render(){
//     return(
//
//       <View style = {styles.container}> //1
//
//       <Text style={styles.logo}>Register</Text>
//         <View style={styles.inputView}> //2
//         <TextInput
//           style={styles.input}
//           placeholder= "Enter your name..."
//           placeholderTextColor="#003f5c"
//           returnKeyType = "next"
//           onSubmitEditing = {() => {this.emailInput.focus();}}
//           />
//         <TextInput
//           style={styles.inputText}
//           placeholder= "Enter your Email..."
//           placeholderTextColor="#003f5c"
//           returnKeyType = "next"
//           onSubmitEditing = { () => {this.passwordInput.focus();}}
//           keyboardType = "email-address"
//           autoCapitalize = "none"
//           autoCorrect = {false}
//           ref = {(input) => {this.emailInput = input;}}
//         />
//         <TextInput style={styles.inputText}
//           placeholder= "Enter a password..."
//           placeholderTextColor="#003f5c"
//           returnKeyType = "go"
//           secureTextEntry
//           ref = {(input) => {this.passwordInput = input;}}
//         />
//         </View> //2
//         <TouchableOpacity style = {styles.loginBtn}
//         onPress = {() => this.props.nagivation.navigate('Login')}>
//           <Text style = {style.buttontext}> SIGN UP </Text>
//         </TouchableOpacity>
//         <Button
//           title = "Register Again"
//           color = '#1abc9c'
//           onPress = {() =>this.props.navigation.navigate('Register')}
//           />
//
//     </View> //1
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#003f5c',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logo:{
//     fontWeight:"bold",
//     fontSize:46,
//     color:"#fb5b5a",
//     marginBottom:40
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
//   forgot:{
//     color:"white",
//     fontSize:11
//   },
//   loginBtn:{
//     width:"80%",
//     backgroundColor:"#fb5b5a",
//     borderRadius:25,
//     height:50,
//     alignItems:"center",
//     justifyContent:"center",
//     marginTop:40,
//     marginBottom:10
//   },
//   loginText:{
//     color:"white"
//   }
// });
