import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, } from 'react-native';
import { Card } from 'react-native-elements';
import { removePost, watchNewPosts } from '../actions';
import FireForumData from '../../config/Firebase/FireForumData';
import Fire from "../../config/Firebase/FireForumChat";
import {withNavigation} from 'react-navigation'
import {Collapse, CollapseHeader, CollapseBody} from "accordion-collapse-react-native";

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

  goToChat = (title,email) => { 
    Fire.cID= title;
    this.props.navigation.navigate("ForumChat", {name: email});
  };

  

  render(){
    return(
      <View style={styles.container}>
    
      
      {this.props.NewPosts.map(NewPost => 
      // <TouchableOpacity key={NewPost.id} onPress = {() => ClickedPost(NewPost.id)}>
          
          // <Card key = {NewPost.id}
          // title = {NewPost.title}>
          // <Text style = {{
          //         fontSize:24,
          //         textDecorationLine: NewPost.completed ? 'line-through' : 'none'
          //     }}>{NewPost.body}</Text> 
          //     <Button 
          //     title = 'Remove Post'
          //     onPress = {() => {this.props.removePost(NewPost.id); FireForumData.removeNow(NewPost.title); }}/>
          //     <Button
          //     title = 'Go to chat'
          //     onPress = {() => this.goToChat(NewPost.title,NewPost.email)}/>
          // </Card>

        <Collapse key={NewPost.id} 
        style={{padding:10, marginTop:10, marginBotton:10 }}>
          <CollapseHeader style = {{alignItems:'center',padding:10, backgroundColor: '#E6E6E6'}}>
            <View>
              <Text style ={{fontSize: 24}}>{NewPost.title}</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <View>
              <Text style ={{fontSize: 24}}>{NewPost.body}</Text>
            </View>
            <View>
              <Button
                title = 'Remove Post'
                onPress = {() => {this.props.removePost(NewPost.id); FireForumData.removeNow(NewPost.title); }}/>
            </View>
            <View>
              <Button
                title = 'Go to chat'
                onPress = {() => this.goToChat(NewPost.title,NewPost.email)}/>            
              </View>
          </CollapseBody>
        </Collapse>
        
          

      // </TouchableOpacity> 
      )}
  </View>
    )
  }
  //map over all the NewPosts and display a component
  
  
  
    
  }
  
  export default withNavigation( NewPostList ) ;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      
    },
  });