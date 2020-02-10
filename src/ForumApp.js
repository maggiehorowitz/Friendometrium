import React from 'react';
import { StyleSheet, Text, View, Button, Icon } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FunFacts from '../screens/Cards/FunFacts';
import InTheWorkPlace from '../screens/Cards/InTheWorkPlace';
import Products from '../screens/Cards/Products';

class ForumApp extends React.Component {
    
    constructor(props){
        super(props);

    }
  
    render(){
    
    return (
      <View style={styles.container}>
          <Text style={{marginTop:10, fontSize:30, textAlign:'center'}}>Forum Main!</Text>
          

          <ScrollView
          showsVerticalScrollIndicator = {false}>

           
            <FunFacts/>
            <InTheWorkPlace/>
            <Products/>

          </ScrollView>
            
        
      </View>
    );
  
  }
  
}

export default ForumApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
  },
});