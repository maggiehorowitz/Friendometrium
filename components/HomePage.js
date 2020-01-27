import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Share } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from "react-navigation-stack"
import { Ionicons } from '@expo/vector-icons';

import MapPage from './MapPage';


const Header =({name, openDrawer})=> (
  <View style={styles.header}>
    <TouchableOpacity onPress={()=>openDrawer()}>
      <Ionicons name="ios-menu" size={32} />
    </TouchableOpacity>
    <Text>{name}</Text>
    <Text style={{width:50}}></Text>
  </View>
)
const Home = ({navigation}) => (
  <View style={styles.container}>
    <Header name="Home" openDrawer={navigation.openDrawer}/>
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
  </View>
)

// const Map = ({navigation}) => (
//   <View style={styles.container}>
//     <Header name="Map" openDrawer={navigation.openDrawer}/>
//     <Image source ={require("./assets/map.jpg")} style={{width:"80%", height:"30%"}} resizeMode="contain"/>
//     <Text style={{padding:20}}>
//     This is the Map page.
//     </Text>
//     <Text style={{padding:20}}>
//     Map 2nd block of text.
//     </Text>
//     <Button
//       title = "View Map"
//       color = '#1abc9c'
//       onPress = {() =>this.props.navigation.navigate('Map')}
//       />
//   </View>
// )

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
              name:"Map",
              icon:"ios-map"
          },
          {
              name:"Forum",
              icon:"ios-chatboxes"
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
    Map:{ screen: MapPage}, //can get rid of constant and put actually screen there
    Forum:{ screen: Forum}

  },
  {
    initialRouteName: "Home",
    unmountInactiveRoutes: true,
    headerMode: "none",
    contentComponent: props => <Sidebar {...props} />
  }
)

const AppNavigator = createStackNavigator(
  {
    Drawer : {screen: Drawer},
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none",
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
    height:60,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:20
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
  }
});




//OLD HOME PAGE with nothing on it, but it works...



// import React, {Component} from 'react';
// import { Button, View, Text , StyleSheet, TextInput, TouchableOpacity,Image, FlatList } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createDrawerNavigator } from 'react-navigation-drawer';
//
//
//
// export default class HomePage extends Component{
//   render(){
//     return(
//       <View style ={styles.container}>
//         <Text style = {styles.text}> Welcome to HomePage </Text>
//       </View>
//     );
//   }
// }
//
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#003f5c',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   text: {
//     textAlign: 'center',
//     color:"black"
//   }
// });
