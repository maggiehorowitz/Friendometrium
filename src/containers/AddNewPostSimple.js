import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { connect } from 'react-redux';
import { addNewPost } from '../actions';

class AddNewPostSimple extends React.Component {
    
  
    state = {
        text: '',
    }


    addNewPost = (text) => {
        //redux store
        //this wil dispatch the action to the store
        this.props.dispatch( addNewPost(text))
        this.setState({text: ''})
    }

    render(){
    
    return (
      <View style={{flexDirection:'row', marginHorizontal:20, paddingTop: 20}}>
          <TextInput 
            onChangeText={(text) => this.setState({text})}
            value = {this.state.text}
            placeholder = "AddNewPost"
            style = {{borderWidth:1,height:50,flex:1,padding:5}}
            />
            <TouchableOpacity onPress={()=> this.addNewPost(this.state.text)}>
                <View style={{height:50, alignItems:'center',justifyContent:'center'}}>
                    <Ionicons name = "md-add" size ={30} style={{padding:10}}/>
                </View>
            </TouchableOpacity>
      </View>
    );
  
  }
  
}
//connecting store to component
export default connect()(AddNewPostSimple)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});