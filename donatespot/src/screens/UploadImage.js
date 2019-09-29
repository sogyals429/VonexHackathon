import React from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Picker,
  SafeAreaView,
} from 'react-native';
import { Input,Button,Text } from 'react-native-elements';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

class UploadImage extends React.Component {


  render() {
    return ( 
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Input placeholder='Product Name' label='Product Name' onChangeText={(text) => this.setState({email:text})} textContentType='emailAddress'/>
      <Input placeholder='Product Description' label='Product Description' onChangeText={(text)=>this.setState({username:text})}/>
      <Input placeholder='Price' label='Price' onChangeText={(text)=>this.setState({password:text})}/>
      <Button title="Add Product" onPress={()=> callApi()}></Button>
      </SafeAreaView>
    );
  }

  callApi(){
    // axios({
    //   url:'https://donatespot.diplomads.com/wp-json/wc/v3/products',
    //   method: 'POST',
    //   data:formData,
    //   headers:{
    //     Accept: 'application/json',
    //     'Content-Type': 'multipart/form-data',
    //     'Authorization': token
    //   }
    // }).then((response) => {
    //   if(response.status===200 || response.status===201){
    //     this.props.navigation.navigate('App');
    //   }else{
    //     console.log(response);
    //     Alert.alert('Failed to get token');
    //   }
    // }).catch(err=>{
    //   console.log(err);
    // });

    axios.post('https://donatespot.diplomads.com/wp-json/wc/v3/products',{
      
    })
    .then((response) => {
      if(response.status===200){
        token = response.data.token
        role = response.data.roles[0]
        this.setState({
          token: token,
          role:role,
          showLoading:false
       })
       this.props.navigation.navigate('ItemsList',{
         token:token,
         role:role,
       });
      }else{
        Alert.alert('Failed to get token');
      }
    }).catch(err=>{
      this.setState({
        showLoading:false
     })
      Alert.alert("Username/Password incorrect")
    });
  }


}

export default UploadImage