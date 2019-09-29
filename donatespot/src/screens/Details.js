import React from 'react';
import {View} from 'react-native';
import { Avatar, Text,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Details extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { navigation } = this.props;
    var product = navigation.getParam('product');
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Avatar
          size="large"
          rounded
          source={{uri:product.images[0].src}}
          />
          <Text>Name: {product.name}</Text>
          <Text>Description: {product.description}</Text>
          <Button title="Request Pickup" onPress={()=>this.requestPick(this)}/>
        </View>
    );
  }

  requestPick(){
    this.props.navigation.navigate('LoginScreen',{
      product:product
    });
  }
}
export default Details;
