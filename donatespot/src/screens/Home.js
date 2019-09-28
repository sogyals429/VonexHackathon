import React from 'react';
import {View, Text, Button } from 'react-native';
import Login from './Login';
class Home extends React.Component {
  static navigationOptions = {
    title: 'Home'
   };
render() {
  const { navigation } = this.props;
 return (
  <View style={{ 
   flex: 1,
   alignItems:'center',
   justifyContent:'center'
  }}>
    <Button title="Go to Profile screen"
    onPress={() => this.props.navigation.navigate('LoginScreen')}
   />

   <Text>
     Token:{JSON.stringify(navigation.getParam('token'))}
   </Text>
  </View>
);
}
}
export default Home;