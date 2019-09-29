import React from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Picker,
} from 'react-native';
import { Input,Button,Text } from 'react-native-elements';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

class UploadImage extends React.Component {

  // /wp-json/wc/v3/products

  render() {
    return ( 
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Input placeholder='Email' label='Email' onChangeText={(text) => this.setState({email:text})} textContentType='emailAddress'/>
      <Input placeholder='Username' label='Username' onChangeText={(text)=>this.setState({username:text})}/>
      <Input placeholder='Password' label='Password' onChangeText={(text)=>this.setState({password:text})} secureTextEntry={true}/>
      <Text>Role</Text>
      <View  style={styles.fixToText}>
      <Button raised={this.state.raised1} title="Picker" onPress={()=>{this.setStateButton1()}}></Button>
      <Button raised={this.state.raised2} title="Packer" onPress={()=>{this.setStateButton2()}}></Button>
      </View>
      </SafeAreaView>
    );
  }


}

export default UploadImage