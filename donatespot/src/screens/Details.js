import React from 'react';
import {View, BackHandler} from 'react-native';
import { Image, Text,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Details extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    this.props.navigation.navigate('ItemsList');
    return true;
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
          <Image style={{height:350,width:400}}
          source={{uri:product.images[0].src}}
          />
          <Text>Name: {product.name}</Text>
          <Text style={{width:350}}>Description: {product.description}</Text>
          <Button title="Request Pickup" onPress={()=>this.requestPick(this)}/>
        </View>
    );
  }

  requestPick(){
    this.props.navigation.navigate('Contact',{
      product:this.product
    });
  }
}
export default Details;
