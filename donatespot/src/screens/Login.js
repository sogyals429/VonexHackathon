import React from 'react';
import {
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button,Text } from 'react-native-elements';
import axios from 'axios';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {token:'',username:'',password:''};
  }

  
  componentDidMount() {
    let token;

    axios.post('https://donatespot.diplomads.com/wp-json/jwt-auth/v1/token',{
      username: 'sogyal',
      password: 'sogyals429'
    })
    .then((response) => {
      if(response.status===200){
        token = response.data.token
        this.setState({
          token: token
        })
      }else{
        Alert.alert('Failed to get token');
      }
    });
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
      <Input placeholder='Username' label='Username' onChangeText={(text)=>this.setState({username:text})}/>
      <Input placeholder='Password' label='Password' onChangeText={(text)=>this.setState({password:text})}/>
      <Button title="Login" onPress={()=>this.callApi(this)}/>
      </View>
    );
  }

  callApi(){

    if(state.username != null && state.password != nil){
      
    }
    // console.log(this.state.username)
    // console.log(this.state.password)
    // console.log(this.state.token)
  }
}

// function callApi(){

  
//   console.log(response.status);
  
//   // data = response.data.data.token;
// }


const styles = StyleSheet.create({
  container:{
  height:40,
  borderColor: 'gray',
  borderWidth:1,
  width:300
  }
});


export default Login;