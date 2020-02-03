import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

//displays the actual list

//the clicked post method (second parameter ) will be linked with our reducer
const NewPostList = ({ NewPosts, ClickedPost }) => (

    //map over all the NewPosts and display a component

    <View style={{padding:20}}>
        {NewPosts.map(NewPost => 
        <TouchableOpacity key={NewPost.id} onPress = {() => ClickedPost(NewPost.id)}>
            <Card>
            <Text style = {{
                    fontSize:24,
                    textDecorationLine: NewPost.completed ? 'line-through' : 'none'
                }}>{NewPost.text}</Text>
            </Card>
                

        </TouchableOpacity>
        )}
    </View>


    
)
  
  export default NewPostList;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      
    },
  });