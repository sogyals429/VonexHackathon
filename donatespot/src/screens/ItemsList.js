import { ListItem, Input, SearchBar } from 'react-native-elements'
import React from 'react';
import axios from 'axios';
import {View, SafeAreaView, ScrollView, ActivityIndicator,Button} from 'react-native';

class ItemsList extends React.Component {
    
    state = {
        items:[],
        showLoading:false,
        role:'',
        showButton:false
    }

    filterSearch(text){
        const newData = this.state.items.filter((item)=>{
          const itemData = item.tags[0].name.toUpperCase()
          const textData = text.toUpperCase()
          return itemData.indexOf(textData)>-1
        });
        this.setState({
          text:text,
          items: newData 
        });
    }

 componentDidMount() {
    const { navigation } = this.props;
    this.setState({role:navigation.getParam('role')});
    if(this.state.role == "wcfm_vendor" || this.state.role == "administrator"){
      this.state.showButton = true;
    }
    
    console.log("mounted");

    this.setState({showLoading:true});

    var token ="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZG9uYXRlc3BvdC5kaXBsb21hZHMuY29tIiwiaWF0IjoxNTY5NzE4MTQ0LCJuYmYiOjE1Njk3MTgxNDQsImV4cCI6MTU3MDMyMjk0NCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.q0oXzqlQVXVSNKE5ipuhanic8SU73nOltLx5CiaLd2s";
    var config = {headers: {'Authorization': token,'content-type':'application/json; charset=UTF-8' }};
  
    axios.get('https://donatespot.diplomads.com/wp-json/wc/v3/products/',config)
    .then(response => {
        console.log("response success ");

        response.data.forEach(x=> {
            let {items} = this.state;
            items.push(x)
            this.setState({items})
        })
        this.setState({showLoading:false});
    })
    .catch(error => {
        console.log("axios error: " + error);
    this.setState({showLoading:false});
    });

    }

render() {   
      
    return (
      
    <SafeAreaView>
        <ScrollView>
         <SearchBar
        placeholder="Filter Here..."
        lightTheme={true}
        onChangeText={(text) => this.filterSearch(text)}
        value={this.state.text}
      />
        
       <ActivityIndicator size="large" color="#0000ff" animating={this.state.showLoading} />
       <Button title="Upload" onPress={() => this.props.navigation.navigate('UploadImage')}></Button>
        {
    this.state.items.map((l, i) => (
      <ListItem
        key={i}
        leftAvatar={{ source: { uri:l.images[0] && l.images[0].src } }}
        title={l.name}
        subtitle={l.categories[0] && l.categories[0].name}
        rightTitle={l.tags[0] && l.tags[0].name}
        bottomDivider
        onPress={() => this.props.navigation.navigate('Details',{
            product:l
        })}
      />
    ))
    }
    </ScrollView>
    </SafeAreaView>
 )
};
}

export default ItemsList;