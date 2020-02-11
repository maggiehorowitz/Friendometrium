import React from 'react';
import { View, Text, StyleSheet, Button, } from 'react-native';
import FireForumData from '../../config/Firebase/FireForumData';
import Fire from "../../config/Firebase/FireForumChat";
import {withNavigation} from 'react-navigation'
import {Collapse, CollapseHeader, CollapseBody} from "accordion-collapse-react-native";

const Category = 'ProductPosts/'

class ProductPostsList extends React.Component {
  
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
        
          


      )}
        </View>
    )
  }

  
  
  
    
  }
  
  export default withNavigation( ProductPostsList ) ;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,

      
    },
  });