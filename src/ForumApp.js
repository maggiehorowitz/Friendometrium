import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import VisiblePosts from './containers/VisiblePosts';

class ForumApp extends React.Component {
    
    constructor(props){
        super(props);

    }
  
    render(){
    
    return (
      <View style={{padding:20}}>
          <Button
            title="New Post"
            onPress={() => this.props.navigation.navigate('NewPostSimple')}
            />
        <View>
            <VisiblePosts/>
        </View>
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