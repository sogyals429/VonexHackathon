import React from 'react';
import {
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button,Text } from 'react-native-elements';
import axios from 'axios';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name:'',email:'',subject:'',message:''};
  }

  render() {
    return ( 
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Input placeholder='Name' label='Name' onChangeText={(text)=>this.setState({name:text})}/>
      <Input placeholder='Email' label='Email' onChangeText={(text)=>this.setState({email:text})}/>
      <Input placeholder='Subject' label='Subject' onChangeText={(text)=>this.setState({subject:text})}/>
      <Input placeholder='Message' label='Message' onChangeText={(text)=>this.setState({message:text})}/>
      <Button title="Send Request" onPress={()=>this.callApi(this)}/>
      </View>
    );
  }

  callApi(){

    const formData = new FormData();
    formData.append('your-name', this.state.name);
    formData.append('your-email', this.state.email);
    formData.append('your-subject', this.state.subject);
    formData.append('your-subject', this.state.subject);
    axios({
      url: 'https://donatespot.diplomads.com/wp-json/contact-form-7/v1/contact-forms/50/feedback',
      method: 'POST',
      data: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
  }
}).then((response) => {
     if(response.status===200){
      Alert.alert('Request Sent Successfully');
      }
    else{
     Alert.alert('Failed to send');
     }
 })
  }
}

const styles = StyleSheet.create({
  container:{
  height:40,
  borderColor: 'gray',
  borderWidth:1,
  width:300
  }
});


export default Contact;