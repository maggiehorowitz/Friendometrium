import React from 'react';
import { StyleSheet, Text, View, TextInput, } from 'react-native';
import { connect } from 'react-redux';
import { Header, Icon, Button } from 'react-native-elements'
import FireForumData from "../../config/Firebase/FireForumData";



class AddNewFunFact extends React.Component {


    state = {
        title: '',
        body: ''
    }

    goBackToForum = () => {
      this.props.navigation.navigate('FunFactsMain')
    }


    continueNow = async () => {
      FireForumData.FFPost.update({
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
          <Header
              leftComponent = {<Icon
                name="arrow-back"
                color = '#fff'
                size = {32}
                onPress={() => this.props.navigation.navigate('FunFactsMain')}
                />}
              centerComponent = {{text: 'New Post!', style: { color: '#fff', fontSize: 32, fontWeight: 'bold'}}}
              containerStyle={{
                backgroundColor: '#E06666',
                justifyContent: 'center'
              }}
              /> 
          
          <View style={styles.titleBox}>
            <TextInput
              onChangeText={(title) => this.setState({title})}

 
              //here set the title
              value = {this.state.title}
              //send this to firebase


              placeholder = "Title"
              style = {{borderWidth:1,height:75,padding:20}}
              />


          </View>

          <View style={styles.postBox}>
            <TextInput
              onChangeText={(body) => this.setState({body})}
              multiline
              scrollEnabled
              value = {this.state.body}
              //send this to firebase
              placeholder = "Body"

              style = {{borderWidth:1,height:100,padding:20}}
              />
          </View>

          <View style = {{padding: 20}}>
            <Button
            title = 'Post Now'
            onPress={() => { this.continueNow(); this.goBackToForum(); }}
            />
           </View> 


      </View>
    );

  }




}
//connecting store to component
export default connect()(AddNewFunFact)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleBox: {
    flex: 1,
    padding: 20
  },
  postBox: {
    flex: 2,
    padding: 20
  }
});
