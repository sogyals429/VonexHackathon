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
    var a = navigation.getParam('product');
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
          source={{uri:a.images[0].src}}
          />
          <Text>Name: {a.name}</Text>
          <Text>Description: {a.description}</Text>
          <Button title="Request Pickup" onPress={()=>this.requestPick(this)}/>
        </View>
    );
  }

  requestPick(){
    this.props.navigation.navigate('contact',{
      contact:a
    });
  }
}
export default Details;
