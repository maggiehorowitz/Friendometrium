import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, } from 'react-native';
import { Card } from 'react-native-elements';
import { removePost, watchNewPosts } from '../actions';
import FireForumData from '../../config/Firebase/FireForumData';
import Fire from "../../config/Firebase/FireForumChat";
import {withNavigation} from 'react-navigation'
import {Collapse, CollapseHeader, CollapseBody} from "accordion-collapse-react-native";

//displays the actual list

const Category = 'WorkPlacePosts/';

class WorkPlaceList extends React.Component {
  
  constructor(props){
    super(props);
    this.props.clearWPPosts();
    this.props.watchNewWPPosts();
    
  }

  goToChat = (title,email) => { 
    Fire.cID= title;
    Fire.category = Category;
    this.props.navigation.navigate("ForumChat", {name: email});
  };

  render(){
    return(
      <View style={styles.container}>
    
      
      {this.props.NewWorkPlacePosts.map(NewWorkPlace => 

        <Collapse key={NewWorkPlace.id} 
        style={{padding:10, marginTop:10, marginBotton:10, borderWidth: .5, borderColor: '#C7C9C9'  }}>
          <CollapseHeader style = {{alignItems:'center',padding:10, }}>
            <View>
              <Text style ={{fontSize: 24}}>{NewWorkPlace.title}</Text>
            </View>
          </CollapseHeader>
          <CollapseBody style ={{alignItems:'center',justifyContent:'center', borderTopWidth: .25, margin: 10}}>
            <View>
              <Text style ={{fontSize: 24, margin: 10}}>{NewWorkPlace.body}</Text>
            </View>
            <View>
              <Button
                title = 'Remove Post'
                onPress = {() => {this.props.removeWPPost(NewWorkPlace.id); FireForumData.removeNow(Category, NewWorkPlace.title); Fire.removeNow()}}/>
            </View>
            <View>
              <Button
                title = 'Go to chat'
                onPress = {() => this.goToChat(NewWorkPlace.title,Fire.email)}/>            
              </View> 
          </CollapseBody>
        </Collapse>
      )}
        </View>
    )
  }

  
  
  
    
  }
  
  export default withNavigation( WorkPlaceList ) ;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,

      
    },
  });