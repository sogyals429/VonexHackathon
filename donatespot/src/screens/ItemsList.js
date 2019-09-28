import { ListItem } from 'react-native-elements'
import React from 'react';
import axios from 'axios';
import {View} from 'react-native';

class ItemsList extends React.Component {
    state = {
        items: []
    };

 componentDidMount() {
    var token ="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZG9uYXRlc3BvdC5kaXBsb21hZHMuY29tIiwiaWF0IjoxNTY5NTcyMzgxLCJuYmYiOjE1Njk1NzIzODEsImV4cCI6MTU3MDE3NzE4MSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.A40qsm_ltb4UpQVAUJUaOCSChrdZTcr0Ffuz2tFPYFw";
    var config = {headers: {'Authorization': token }};
    
    axios.get('https://donatespot.diplomads.com/wp-json/wc/v3/products/',config) .then(items => {
        this.setState({
            items
        });
    });

    console.log(items);
    }

render() {
    return (
    <View>
    items.map((l, i) => (
      <ListItem
        key={i}
        leftAvatar={{ source: { uri: l.images[0].src } }}
        title={l.name}
        subtitle={l.description}
        bottomDivider
      />
    ))
    </View>
 )
};
}

export default ItemsList;