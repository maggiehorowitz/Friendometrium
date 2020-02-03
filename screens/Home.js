import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Share } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from "react-navigation-stack";
import { Button } from 'react-native-elements'
import { withFirebaseHOC } from '../config/Firebase'
import { Ionicons } from '@expo/vector-icons';
import UsersMap from './UsersMap';
import MapPage from './MapPage';
import SignOut from './SignOut';
import ChatIndex from './ChatIndex';


const Header =({name, openDrawer})=> (
  <View style={styles.header}>
    <TouchableOpacity onPress={()=>openDrawer()}>
      <Ionicons name="ios-menu" size={32} />
    </TouchableOpacity>
    <Text></Text>
    <Text style={{width:50}}></Text>
  </View>
)



const Home = ({navigation}) => (
  <View style={styles.container}>
    <Header name="Home2" openDrawer={navigation.openDrawer}/>
    <Image source ={require("./assets/friendometrium.jpg")} style={{width:"80%", height:"30%"}} resizeMode="contain"/>
    <Text style={{padding:20}}>
    Welcome to Friendometrium!
    </Text>
    <Text style={{padding:20}}>
    Friendometrium is a great app for women to form a strong community for supporting women's health. Don't forget to check
    out the maps section and the chat section!
    </Text>
    <TouchableOpacity style={styles.shareBtn} onPress={()=>SharePost()}>
            <Text style={styles.shareTxt}>SHARE</Text>
    </TouchableOpacity>
  </View>
)
const SharePost = async () => {
  try {
    const result = await Share.share({
      url:"https://github.com/maggiehorowitz/Friendometrium"
    });

    if (result.action === Share.sharedAction) {
      alert("Post Shared")
    } else if (result.action === Share.dismissedAction) {
      // dismissed
      alert("Post cancelled")
    }
  } catch (error) {
    alert(error.message);
  }
};

const HandleSignout = async () => {
      try {
        await this.props.firebase.signOut()
        this.props.navigation.navigate('Auth')
      } catch (error) {
        console.log(error)
      }
    };

const DemoChat = ({navigation}) => (
  <View style={styles.container}>
    <Header name="DemoChat" openDrawer={navigation.openDrawer}/>
    <Text style={{padding:20}}>
    Welcome to Friendometrium's Chat
    </Text>
    <Text style={{padding:20}}>
    TestingOut Chat Navigation!
    </Text>
    <TouchableOpacity style={styles.shareBtn} onPress={()=>SharePost()}>
            <Text style={styles.shareTxt}>SHARE</Text>
    </TouchableOpacity>
  </View>
)



const Profile = ({navigation}) => (
  <View style={styles.container}>
    <Header name="Profile" openDrawer={navigation.openDrawer}/>
    <Image source ={require("./assets/t_roberts.jpg")} style={{width:"80%", height:"30%"}} resizeMode="contain"/>
    <Text style={{padding:20}}>
    This is the Profile Page
    </Text>
    <Text style={{padding:20}}>
    Add some information about the Friendometrium user here
    </Text>
    <SignOut />
  </View>
)

const Forum = ({navigation}) => (
  <View style={styles.container}>
    <Header name="Forum" openDrawer={navigation.openDrawer}/>
    <Image source ={require("./assets/chat.jpg")} style={{width:"80%", height:"30%"}} resizeMode="contain"/>
    <Text style={{padding:20}}>
    This is the Forum Chat page. It is not yet implemented.
    </Text>
    <Text style={{padding:20}}>
    Option to add more text here.
    </Text>
  </View>
)



function Item({ item, navigate }) {
  return (
    <TouchableOpacity style={styles.listItem} onPress={()=>navigate(item.name)}>
      <Ionicons name={item.icon} size={32} />
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
}


class Sidebar extends React.Component {
  state = {
      routes:[
          {
              name:"Home",
              icon:"ios-home"
          },
          {
              name:"Profile",
              icon:"ios-contact"
          },
          {
              name:"UsersMap",
              icon:"ios-map"
          },
          {
              name:"PinMap",
              icon:"ios-map"
          },
          {
              name:"Forum",
              icon:"ios-chatboxes"
          },
          {
              name:"Chat",
              icon:"ios-text"
          },
          {
              name:"SignOut",
              icon:"ios-log-out"
          },
      ]
  }
  render(){
      return (
          <View style={styles.container}>
              <Image source={require("./assets/t_roberts.jpg")} style={styles.profileImg}/>
              <Text style={{fontWeight:"bold",fontSize:16,marginTop:10}}>Tomi-Ann Roberts</Text>
              <Text style={{color:"gray",marginBottom:10}}>troberts@coloradocollege.edu</Text>
              <View style={styles.sidebarDivider}></View>
              <FlatList
                  style={{width:"100%",marginLeft:30}}
                  data={this.state.routes}
                  renderItem={({ item }) => <Item  item={item} navigate={this.props.navigation.navigate}/>}
                  keyExtractor={item => item.name}
              />
          </View>
      )
  }
}

const Drawer = createDrawerNavigator(
  {
    Home:{ screen: Home},
    Profile:{ screen: Profile},
    UsersMap:{ screen: UsersMap}, //can get rid of constant and put actually screen there
    PinMap: {screen: MapPage},
    Forum:{ screen: Forum},
    Chat: {screen: ChatIndex},
    SignOut: {screen:SignOut}

  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    unmountInactiveRoutes: true,
    contentComponent: props => <Sidebar {...props} />
  }
)

const AppNavigator = createStackNavigator(
  {
    Drawer : {screen: Drawer},
  },
  {
    headerMode: "none",
    initialRouteName: "Drawer",
    unmountInactiveRoutes: true

  }
)

const AppContainer = createAppContainer(AppNavigator);



export default class App extends React.Component {


  render(){

    return (
      <AppContainer />
    );
  }

}

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


//Old home from the demo below: Allows you to sign out of Firebase as well
// The code exiting firebase: export default withFirebaseHOC(Home)

// class Home extends Component {
//   handleSignout = async () => {
//     try {
//       await this.props.firebase.signOut()
//       this.props.navigation.navigate('Auth')
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Home</Text>
//         <Button
//           title='Signout'
//           onPress={this.handleSignout}
//           titleStyle={{
//             color: '#F57C00'
//           }}
//           type='clear'
//         />
//       </View>
//     )
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })
//
// export default withFirebaseHOC(Home)
