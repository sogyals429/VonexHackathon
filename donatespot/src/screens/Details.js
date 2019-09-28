import React from 'react';
import {Button, View, Text} from 'react-native';

class Details extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}></View>
    );
  }
}
export default Details;
