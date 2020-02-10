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

const Category = 'ProductPosts/'

class ProductPostsList extends React.Component {

  // componentDidMount () {
  //   this.props.watchNewPosts()
  // }
  
  // componentWillUnmount (){
  //    this.props.clearPosts() 
  // }
  
  constructor(props){
    super(props);
    this.props.clearPRPosts();
    this.props.watchNewPRPosts();
    
  }

  goToChat = (title,email) => { 
    Fire.cID= title;
    Fire.category = Category;
    this.props.navigation.navigate("ForumChat", {name: email});
  };


  

  render(){
    return(
      <View style={styles.container}>
    
      
      {this.props.NewProductPosts.map(NewProductPost => 
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

        <Collapse key={NewProductPost.id} 
        style={{padding:10, marginTop:10, marginBotton:10, borderWidth: .5, borderColor: '#C7C9C9'  }}>
          <CollapseHeader style = {{alignItems:'center',padding:10, }}>
            <View>
              <Text style ={{fontSize: 24}}>{NewProductPost.title}</Text>
            </View>
          </CollapseHeader>
          <CollapseBody style ={{alignItems:'center',justifyContent:'center', borderTopWidth: .25, margin: 10}}>
            <View>
              <Text style ={{fontSize: 24, margin: 10}}>{NewProductPost.body}</Text>
              {/* <Text style ={{fontSize: 24, margin: 10}}>{NewPost.timestamp}</Text> */}

              
            </View>
            <View>
              <Button
                title = 'Remove Post'
                onPress = {() => {this.props.removePRPost(NewProductPost.id); FireForumData.removeNow(Category, NewProductPost.title); Fire.removeNow()}}/>
            </View>
            <View>
              <Button
                title = 'Go to chat'
                onPress = {() => this.goToChat(NewProductPost.title,Fire.email)}/>            
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
  
  export default withNavigation( ProductPostsList ) ;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,

      
    },
  });