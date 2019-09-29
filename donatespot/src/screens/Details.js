import React from 'react';
import {View, BackHandler} from 'react-native';
import { Image, Text,Button} from 'react-native-elements';
import HTML from 'react-native-render-html';
import MapView from 'react-native-maps';

class Details extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {product:navigation.getParam('product')};
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

    const htmlContent = product.description;
    console.log("*", this.state.product.images[0] )
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Text h3>{this.state.product.name}</Text>
          <Image style={{height:350,width:400}}
          source={this.state.product.images[0] && this.state.product.images[0].src ? {uri: this.state.product.images[0].src  }:require('./image.jpeg') }
          />
          <Text h4>Description:</Text>
          <HTML html={htmlContent} style={{width:350}}></HTML>
          <Button title="Request Pickup" onPress={()=>this.requestPick(this)}/>

          <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
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
