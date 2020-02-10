import React from 'react';
import { View, Text, StyleSheet, Button, } from 'react-native';
import FireForumData from '../../config/Firebase/FireForumData';
import Fire from "../../config/Firebase/FireForumChat";
import {withNavigation} from 'react-navigation'
import {Collapse, CollapseHeader, CollapseBody} from "accordion-collapse-react-native";

//displays the actual list

const Category = 'FunFactsPosts/';

class FunFactsList extends React.Component {

  
  constructor(props){
    super(props);
    this.props.clearFFPosts();
    this.props.watchNewFFPosts();
    
  }

  goToChat = (title,email) => { 
    Fire.cID= title;
    Fire.category = Category
    this.props.navigation.navigate("ForumChat", {name: email});
  };


  render(){
    return(
      <View style={styles.container}>
    
      
      {this.props.NewFunFacts.map(NewFunFact => 


        <Collapse key={NewFunFact.id} 
        style={{padding:10, marginTop:10, marginBotton:10, borderWidth: .5, borderColor: '#C7C9C9'  }}>
          <CollapseHeader style = {{alignItems:'center',padding:10, }}>
            <View>
              <Text style ={{fontSize: 24}}>{NewFunFact.title}</Text>
            </View>
          </CollapseHeader>
          <CollapseBody style ={{alignItems:'center',justifyContent:'center', borderTopWidth: .25, margin: 10}}>
            <View>
              <Text style ={{fontSize: 24, margin: 10}}>{NewFunFact.body}</Text>

              
            </View>
            <View>
              <Button
                title = 'Remove Post'
                onPress = {() => {this.props.removeFFPost(NewFunFact.id); FireForumData.removeNow(Category,NewFunFact.title); Fire.removeNow()}}/>
            </View>
            <View>
              <Button
                title = 'Go to chat'
                onPress = {() => this.goToChat(NewFunFact.title,Fire.email)}/>            
              </View> 
          </CollapseBody>
        </Collapse>

      )}
        </View>
    )
  }
  
  
  
    
  }
  
  export default withNavigation( FunFactsList ) ;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,

      
    },
  });