import React from 'react';
import {
  Alert,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import { Input,Button,Text } from 'react-native-elements';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

class UploadImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {productName:'',price:'',productDesc:'',showLoading:false}
  }

  render() {
    return ( 
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Input placeholder='Product Name' label='Product Name' onChangeText={(text) => this.setState({produtName:text})}/>
      <Input placeholder='Product Description' label='Product Description' onChangeText={(text)=>this.setState({produtDesc:text})}/>
      <Input placeholder='Price' label='Price' onChangeText={(text)=>this.setState({price:text})} />
      <ActivityIndicator size="large" color="#0000ff" animating={this.state.showLoading} />
      <Button title="Add Product" onPress={()=> this.callApi(this)}></Button>
      </SafeAreaView>
    );
  }

  callApi(){
    this.setState({showLoading:true});
    var token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZG9uYXRlc3BvdC5kaXBsb21hZHMuY29tIiwiaWF0IjoxNTY5NzE4MTQ0LCJuYmYiOjE1Njk3MTgxNDQsImV4cCI6MTU3MDMyMjk0NCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.q0oXzqlQVXVSNKE5ipuhanic8SU73nOltLx5CiaLd2s'
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
      name:this.state.produtName,
      type:'simple',
      regular_price:this.state.price,
      description:this.state.produtDesc,
      headers:{
        'Authorization': token
      }
    })
    .then((response) => {
      if(response.status===200){
        Alert.alert("product added")
        this.setState({showLoading:false})
      //  this.props.navigation.navigate('ItemsList',{
      //    token:token,
      //    role:role,
      //  });
      }else{
        Alert.alert('Failed to get token');
      }
    }).catch(err=>{
      this.setState({
        showLoading:false
     })
      Alert.alert("Failed")
    });
  }


}

export default UploadImage