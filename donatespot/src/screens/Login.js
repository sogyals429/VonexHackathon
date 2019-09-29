import React from 'react';
import {
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import { Input,Button,Text } from 'react-native-elements';
import axios from 'axios';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {token:'',username:'',password:''};
  }

  render() {
    const { navigation } = this.props;
    var product = navigation.getParam('product');
    return ( 
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Input placeholder='Username' label='Username' onChangeText={(text)=>this.setState({username:text})}/>
      <Input placeholder='Password' label='Password' onChangeText={(text)=>this.setState({password:text})}
      secureTextEntry={true}/>
      <Button title="Login" onPress={()=>this.callApi(this)}/>
      <Button title="Register" type="clear" onPress={()=>this.props.navigation.navigate('RegisterScreen')}/>
      </View>
    );
    
  }

  callApi(){
   
    let token;
    axios.post('https://donatespot.diplomads.com/wp-json/jwt-auth/v1/token',{
      username: this.state.username,
      password: this.state.password
    })
    .then((response) => {
      if(response.status===200){
        token = response.data.token
        this.setState({
          token: token
       })
       this.props.navigation.navigate('App',{
         token:token
       });
      }else{
        Alert.alert('Failed to get token');
      }
    }).catch(err=>{
      console.log(err);
    });
  }
}

export default Login;