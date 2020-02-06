import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, } from 'react-native';
import { Card } from 'react-native-elements';
import { removePost, watchNewPosts } from '../actions';
import FireForumData from '../../config/Firebase/FireForumData';

//displays the actual list


//the clicked post method (second parameter ) will be linked with our reducer
// const NewPostList = ({ NewPosts, removePost, watchNewPosts }) => (

//     //map over all the NewPosts and display a component
    
    
//     <View style={styles.container}>
//       <Button
//       title = 'FetchPosts' 
//       onPress = {() => watchNewPosts()}/>
        
//         {NewPosts.map(NewPost => 
//         // <TouchableOpacity key={NewPost.id} onPress = {() => ClickedPost(NewPost.id)}>
            
//             <Card key = {NewPost.id}
//             title = {NewPost.title}>
//             <Text style = {{
//                     fontSize:24,
//                     textDecorationLine: NewPost.completed ? 'line-through' : 'none'
//                 }}>{NewPost.body}</Text> 
//                 <Button 
//                 title = 'Remove Post'
//                 onPress = {() => {removePost(NewPost.id); FireForumData.removeNow(NewPost.title) }}/>
//             </Card>
                
 
//         // </TouchableOpacity>
//         )}
//     </View>

class NewPostList extends React.Component {

  // componentDidMount () {
  //   this.props.watchNewPosts()
  // }
  
  // componentWillUnmount (){
  //    this.props.clearPosts() 
  // }
  constructor(props){
    super(props);
    this.props.clearPosts();
    this.props.watchNewPosts();
  }

  render(){
    return(
      <View style={styles.container}>
    
      
      {this.props.NewPosts.map(NewPost => 
      // <TouchableOpacity key={NewPost.id} onPress = {() => ClickedPost(NewPost.id)}>
          
          <Card key = {NewPost.id}
          title = {NewPost.title}>
          <Text style = {{
                  fontSize:24,
                  textDecorationLine: NewPost.completed ? 'line-through' : 'none'
              }}>{NewPost.body}</Text> 
              <Button 
              title = 'Remove Post'
              onPress = {() => {this.props.removePost(NewPost.id); FireForumData.removeNow(NewPost.title) }}/>
          </Card>
              

      // </TouchableOpacity>
      )}
  </View>
    )
  }
  //map over all the NewPosts and display a component
  
  
  
    
  }
  
  export default NewPostList;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      
    },
  });