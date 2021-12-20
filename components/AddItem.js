import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({title, addItem}) => {

  const [text, setText] = useState('');
  const onChange = (textValue) => setText(textValue);
  return(
    <View>
      <TextInput placeholder="Add Item" style={styles.input} onChangeText={onChange}/>
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
      <Icon name="plus" size={20}/>
      </TouchableOpacity>
    </View>
  )
};



const styles = StyleSheet.create({
 input: {
   heigth:60,
   padding:8,
   fontSize:16
 },
 btn: {
  backgroundColor:'#c2bad8',
  padding:9,
  margin:5
 },
 btnText: {
  color:'darkslateblue',
  fontSize:20,
  TextAlign:'center'
 }
})

export default AddItem;