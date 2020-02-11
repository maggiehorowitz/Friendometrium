import React from 'react';
import { Platform, KeyboardAvoidingView,SafeAreaView, View, Text } from 'react-native';
import { Header, Icon } from 'react-native-elements'
import {GiftedChat} from 'react-native-gifted-chat';
import Fire from "../config/Firebase/FireForumChat";

export default class ForumChat extends React.Component {


  state = {
    messages: []
  }


  get user(){
    return{
      _id: Fire.uid,
      name: this.props.navigation.state.params.name

    };
  }

  componentDidMount(){
    Fire.get(message =>
      this.setState(previous => ({
        messages: GiftedChat.append(previous.messages,message)
      }))
    );
  }

  componentWillUnmount(){
    Fire.off();

  }


  render(){
    const chat = <GiftedChat messages = {this.state.messages} onSend={Fire.send} user={this.user}/>;
    const chatName = Fire.cID
    if (Platform.OS == 'android'){
      return(
        <KeyboardAvoidingView style ={{flex: 1}} behavior = "padding"keyboardVerticalOffset = {30} enabled>
          {chat}
        </KeyboardAvoidingView>
      );
    }

    return <View style = {{flex : 1}}>
            <Header
              leftComponent = {<Icon
                name="arrow-back"
                color = '#fff'
                size = {32}
                onPress={() => this.props.navigation.navigate('Forum')}
                />}
              centerComponent = {{text: 'Chat', style: { color: '#fff', fontSize: 32, fontWeight: 'bold'}}}
              containerStyle={{
                backgroundColor: '#E06666',
                justifyContent: 'center'
              }}
              />
            {chat}
          </View>;

  }
}
