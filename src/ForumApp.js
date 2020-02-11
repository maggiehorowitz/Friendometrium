import React from 'react';
import { StyleSheet, Text, View, Button, Icon } from 'react-native';
import { Header } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import FunFacts from '../screens/Cards/FunFacts';
import InTheWorkPlace from '../screens/Cards/InTheWorkPlace';
import Products from '../screens/Cards/Products';
import ComingSoon from '../screens/Cards/ComingSoon';

class ForumApp extends React.Component {
    
    constructor(props){
        super(props);

    }
  
    render(){
    
    return (
      
      
      <View style = {styles.container}>

          <Header
          centerComponent = {{text: 'Forum!', style: { color: '#fff', fontSize: 32, fontWeight: 'bold'}}}
          containerStyle={{
            backgroundColor: '#E06666',
            justifyContent: 'center'
          }}
          />
          <ScrollView
            showsVerticalScrollIndicator= {false}>

              <Text style = {{fontSize:24, textAlign: 'center', padding: 10}}>Click below to explore</Text>
            
              <FunFacts/>
              <InTheWorkPlace/>
              <Products/>
              <ComingSoon/>

            </ScrollView>
          
            
        
      </View>
    );
  
  }
  
}

export default ForumApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
 
});