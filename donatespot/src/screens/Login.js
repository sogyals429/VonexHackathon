import React from 'react';
import {
  StyleSheet,
  View,
  Alert,
  ActivityIndicator,
  BackHandler
} from 'react-native';
import { Image,Input,Button,Text } from 'react-native-elements';
import axios from 'axios';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {token:'',username:'',password:'',showLoading:false,role:''};
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
 
    //Code to display alert message when use click on android device back button.
    Alert.alert(
      ' Exit From App ',
      ' Do you want to exit From App ?',
      [
        { text: 'Yes', onPress: () => BackHandler.exitApp() },
        { text: 'No', onPress: () => console.log('NO Pressed') }
      ],
      { cancelable: false },
    );
 
    // Return true to enable back button over ride.
    return true;
  }

  render() {
    const { navigation } = this.props;
    var product = navigation.getParam('product');
    return ( 

      <View style={styles.View}>
      <Image
          source={{ uri: "https://donatespot.diplomads.com/wp-content/themes/shopkit/demos/logo-material.png" }}
          containerStyle={styles.viewLogo}/>
      <Text style={{marginBottom:20}} h1>DonateSpot</Text>    
      <Input containerStyle={styles.inputBox} placeholder='Username' label='Username' onChangeText={(text)=>this.setState({username:text})}/>
      <Input containerStyle={styles.inputBox} placeholder='Password' label='Password' onChangeText={(text)=>this.setState({password:text})}
      secureTextEntry={true}/>
      <ActivityIndicator size="large" color="#0000ff" animating={this.state.showLoading} />
      <Button buttonStyle={styles.loginbutton} title="Login" onPress={()=>this.callApi(this)}/>
      <Button buttonStyle={styles.regbutton} title="Register" type="outline" onPress={()=>this.props.navigation.navigate('RegisterScreen')}/>
      </View>
    );
    
  }

  callApi(){
    this.setState({showLoading:true});
    let token;
    let role;
    axios.post('https://donatespot.diplomads.com/wp-json/jwt-auth/v1/token',{
      username: this.state.username,
      password: this.state.password
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

const styles = StyleSheet.create ({
  View:{
    flex: 1, justifyContent: "center", alignItems: "center" 
  },
  inputBox:{
    width:350
  },
  viewLogo:{
    marginBottom:10,
    height: 180,
    width: 170,
    resizeMode: 'contain'
  },
  loginbutton:{
    marginTop:20,
    width:300
  },
  regbutton:{
    marginTop:30,
    width:300,
  }
})

export default Login;