import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, } from 'react-native';
import { Card } from 'react-native-elements';
import { removePost } from '../actions';
import FireForumData from '../../config/Firebase/FireForumData';

//displays the actual list


//the clicked post method (second parameter ) will be linked with our reducer
const NewPostList = ({ NewPosts, removePost, }) => (

    //map over all the NewPosts and display a component
    

    <View style={styles.container}>
        
        {NewPosts.map(NewPost => 
        // <TouchableOpacity key={NewPost.id} onPress = {() => ClickedPost(NewPost.id)}>
            
            <Card key = {NewPost.id}
            title = {NewPost.title}>
            <Text style = {{
                    fontSize:24,
                    textDecorationLine: NewPost.completed ? 'line-through' : 'none'
                }}>{NewPost.body}</Text>
                <Button 
                title = 'Remove Post'
                onPress = {() => {removePost(NewPost.id); FireForumData.removeNow(NewPost.title) }}/>
            </Card>
                

        // </TouchableOpacity>
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