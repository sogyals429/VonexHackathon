import React from 'react';
import {
  StyleSheet,
  View,
  Alert,
  ActivityIndicator
} from 'react-native';
import { Image,Input,Button,Text } from 'react-native-elements';
import axios from 'axios';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {token:'',username:'',password:'',showLoading:false};
  }

  render() {
    const { navigation } = this.props;
    var product = navigation.getParam('product');
    return ( 

      <View style={styles.View}>
      <Image
          source={{ uri: "https://donatespot.diplomads.com/wp-content/themes/shopkit/demos/logo-material.png" }}
          style={styles.viewLogo}/>
      <Text h1>DonateSpot</Text>    
      <Input placeholder='Username' label='Username' onChangeText={(text)=>this.setState({username:text})}/>
      <Input placeholder='Password' label='Password' onChangeText={(text)=>this.setState({password:text})}
      secureTextEntry={true}/>
      <ActivityIndicator size="large" color="#0000ff" animating={this.state.showLoading} />
      <Button style={styles.button} title="Login" onPress={()=>this.callApi(this)}/>
      <Button title="Register" type="clear" onPress={()=>this.props.navigation.navigate('RegisterScreen')}/>
      </View>
    );
    
  }

  callApi(){
    this.setState({showLoading:true});
    let token;
    axios.post('https://donatespot.diplomads.com/wp-json/jwt-auth/v1/token',{
      username: this.state.username,
      password: this.state.password
    })
    .then((response) => {
      if(response.status===200){
        token = response.data.token
        this.setState({
          token: token,
          showLoading:false
       })
       this.props.navigation.navigate('ItemsList',{
         token:token
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

const styles = StyleSheet.create ({
  View:{
    flex: 1, justifyContent: "center", alignItems: "center" 
  },
  viewLogo:{
    height: 150,
    width: 150,
    resizeMode: 'contain'
  },
  button:{
    marginTop:100
  }
})

export default Login;