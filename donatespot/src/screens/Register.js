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


class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {token:'',username:'',password:'',language:'',role:0,raised1:false,raised2:false};
  }
  
  render() {
    return ( 
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Input placeholder='Email' label='Email' onChangeText={(text) => this.setState({email:text})} textContentType='emailAddress'/>
      <Input placeholder='Username' label='Username' onChangeText={(text)=>this.setState({username:text})}/>
      <Input placeholder='Password' label='Password' onChangeText={(text)=>this.setState({password:text})} secureTextEntry={true}/>
      <Text>Role</Text>
      <View  style={styles.fixToText}>
      <Button raised={this.state.raised1} title="Picker" onPress={()=>{this.setStateButton1()}}></Button>
      <Button raised={this.state.raised2} title="Packer" onPress={()=>{this.setStateButton2()}}></Button>
      </View>

      </View>
    );
  }

  setStateButton1(){
    this.setState({raised1: !this.state.raised1})
    this.setState({role:1})
    this.callApi()
  }

  setStateButton2(){
    this.setState({raised2: !this.state.raised2})
    this.setState({role:2})
    this.callApi()
  }

  callApi(){
   
    console.log("Called")
    let finalRole = '';
    if (this.state.role == 0){
      finalRole = 'customer'
    }else{
      finalRole = 'wcfm_vendor'
    }

    const formData = new FormData();
    formData.append('email', this.state.email);
    formData.append('username', this.state.username);
    formData.append('password', this.state.password);
    formData.append('roles', finalRole);
    
    var token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZG9uYXRlc3BvdC5kaXBsb21hZHMuY29tIiwiaWF0IjoxNTY5NzE4MTQ0LCJuYmYiOjE1Njk3MTgxNDQsImV4cCI6MTU3MDMyMjk0NCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.q0oXzqlQVXVSNKE5ipuhanic8SU73nOltLx5CiaLd2s';

    axios({
      url:'https://donatespot.diplomads.com/wp-json/wp/v2/users',
      method: 'POST',
      data:formData,
      headers:{
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        'Authorization': token
      }
    }).then((response) => {
      if(response.status===200 || response.status===201){
        this.props.navigation.navigate('App');
      }else{
        console.log(response);
        Alert.alert('Failed to get token');
      }
    }).catch(err=>{
      console.log(err);
    });
  }
}

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});


export default Register;