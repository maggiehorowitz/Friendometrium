import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity,  } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { connect } from 'react-redux';
import { addNewPost } from '../actions';
import { Button } from 'react-native-elements';

class AddNewPostSimple extends React.Component {
    
  
    state = {
        title: '',
        body: '',
    }


    addNewPost = (title, body) => {
        //redux store
        //this wil dispatch the action to the store
        this.props.dispatch( addNewPost(title,body))
        this.setState({title: ''})
        this.setState({body: ''})
    }

    render(){
    
    return (
      <View style={styles.container}>
          <Text style={{marginTop:10, fontSize:30, textAlign:'center'}}>New Topic!</Text>
          
          <View style={styles.container}>
            <TextInput 
              onChangeText={(title) => this.setState({title})}
              value = {this.state.title}
              placeholder = "Title"
              style = {{borderWidth:1,height:75,padding:20}}
              />

            
          </View>
          
          <View style={styles.container}>
            <TextInput 
              onChangeText={(body) => this.setState({body})}
              value = {this.state.body}
              placeholder = "Body"
              style = {{borderWidth:1,height:100,padding:20}}
              />
          </View>
          
            
            {/* <TouchableOpacity onPress={()=> this.addNewPost(this.state.text)}> */}
                {/* <View style={{height:50, alignItems:'center',justifyContent:'center'}}> */}
                    {/* <Ionicons name = "md-add" size ={30} style={{padding:10}}/> */}
                    {/* <Text>Post Now!</Text> */}
                {/* </View> */}
            {/* </TouchableOpacity> */}
            <Button style={{padding:20}}
            onPress={() => this.addNewPost(this.state.title, this.state.body)}
            title = 'Post Now'
            />

      </View>
    );
  
  }
  
}
//connecting store to component
export default connect()(AddNewPostSimple)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});