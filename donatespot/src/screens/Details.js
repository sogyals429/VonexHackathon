import React from 'react';
import {View} from 'react-native';
import { Image, Text,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Details extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {product:navigation.getParam('product')};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Image style={{height:250,width:400}}
          source={{uri:this.state.product.images[0].src}}
          />
          <Text>Name: {this.state.product.name}</Text>
          <Text style={{width:350}}>Description: {this.state.product.description}</Text>
          <Button title="Request Pickup" onPress={()=>this.requestPick(this)}/>
        </View>
    );
  }

  requestPick(){
    this.props.navigation.navigate('Contact',{
      product:this.state.product
    });
  }
}
export default Details;
