import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text
} from 'react-native';
class Login extends React.Component {
  render() {
    return ( 
      <View style={styles.container}>
        <Text>Login</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center'
  }
});

export default Login;
