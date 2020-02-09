import React from 'react';
import { StyleSheet, Text, View, Button, Icon } from 'react-native';
import VisiblePosts from './containers/VisiblePosts';
import { ScrollView } from 'react-native-gesture-handler';
import FunFacts from '../screens/Cards/FunFacts';
import InTheWorkPlace from '../screens/Cards/InTheWorkPlace';
import Products from '../screens/Cards/Products';
import { watchNewPosts } from './actions';
import VisibleFunFacts from './containers/VisibleFunFacts';

class FunFactsMain extends React.Component {
    
    constructor(props){
        super(props);

    }
  
    render(){
    
    return (
      <View style={styles.container}>
          <Text style={{marginTop:10, fontSize:30, textAlign:'center'}}>Forum!</Text>
          <Button
            title="New Post"
            onPress={() => this.props.navigation.navigate('AddNewFF')}
            />

          <ScrollView
          showsVerticalScrollIndicator = {false}>

           
            <VisibleFunFacts/>

          </ScrollView>
            
        
      </View>
    );
  
  }
  
}

export default FunFactsMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
  },
});