import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import SearchBar  from './components/SearchBar';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import { uuid } from 'uuidv4';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text:'Milk'},
    {id: uuid(), text:'Coffee'},
    {id: uuid(), text:'Oranges'},
    {id: uuid(), text:'Bread'},
  ]);

const addItem = (text) => {
  if(!text){
    Alert.alert('Error','Please Enter an item', {text:'Ok'})
  }else{
    setItems(prevItems =>{
      return [{id: uuid(), text},...prevItems];
    })
  }
 
}

  return(
    <View style={styles.container}>
      <SearchBar />
      
      <AddItem addItem={addItem}/>
      <FlatList 
      data={items}
      renderItem={({item}) =><ListItem item={item}/>} />
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:5
  },
})

export default App;