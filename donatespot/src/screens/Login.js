import React from 'react';
import {
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button,Text } from 'react-native-elements';
import {axios} from 'axios';

class Login extends React.Component {
constructor(props) {
  super(props);
  this.state = {text:''};
}

  render() {
    return ( 
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* //   <Text>Login</Text>
      //   <TextInput
      //     style={styles.container}
      //   onChangeText = {text => onChangeText(text)}
      //   value={value}
      //   /> */}
      <Input placeholder='BASIC INPUT' label='Username' onchange={(text)=>this.setState({text})}/>
      <Input placeholder='BASIC INPUT' label='Password'/>
      <Button title="Login" onPress={()=>callApi()}/>
      </View>
    );
  }
}

function callApi(){
var token = axios.post('https://donatespot.diplomads.com/wp-json/jwt-auth/v1/token')

  // fetch('https://donatespot.diplomads.com/wp-json/jwt-auth/v1/token',{
  //   method: 'POST',
  //   body:JSON.stringify({
  //     username:'sogyal',
  //     password:'sogyals429'
  //   })
  // }).then((response) =>response.json()).then((responseJson)=>{
  //   console.log(responseJson);
  // }).catch((error) => {
  //   console.log(error);
  // })
}


const styles = StyleSheet.create({
  container:{
  height:40,
  borderColor: 'gray',
  borderWidth:1,
  width:300
  }
});


export default Login;