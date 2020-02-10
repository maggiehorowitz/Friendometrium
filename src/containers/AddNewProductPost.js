import React from 'react';
import { StyleSheet, Text, View, TextInput, } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import FireForumData from "../../config/Firebase/FireForumData";



class AddNewProductPost extends React.Component {


    state = {
        title: '',
        body: ''
    }

    goBackToForum = () => {
      this.props.navigation.navigate('ProductsMain')
    }


    continueNow = async () => {
      FireForumData.PRPost.update({
         [this.state.title]: {
            title: this.state.title,
            body: this.state.body,
            u_email: FireForumData.email,
            timestamp: FireForumData.timestamp,
         }
      });
    }

   

    render(){

    return (
      <View style={styles.container}>
          <Text style={{flexDirection:'row', marginTop:10, fontSize:30, textAlign:'center'}}>New Topic!</Text>
          
          <View style={styles.container}>
            <TextInput
              onChangeText={(title) => this.setState({title})}


              //here set the title
              value = {this.state.title}
              //send this to firebase


              placeholder = "Title"
              style = {{borderWidth:1,height:75,padding:20}}
              />


          </View>

          <View style={styles.container}>
            <TextInput
              onChangeText={(body) => this.setState({body})}
              value = {this.state.body}
              //send this to firebase
              placeholder = "Body"
              style = {{borderWidth:1,height:100,padding:20}}
              />
          </View>

            <Button style={{padding:20}}
            onPress = {() =>{ this.continueNow(); this.goBackToForum(); }}
            title = 'Post Now'
            />
            <Button 
          title = "Back"
          onPress ={()=> this.goBackToForum()}/> 

      </View>
    );

  }




}
//connecting store to component
export default connect()(AddNewProductPost)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
