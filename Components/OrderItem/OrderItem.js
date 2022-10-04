import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {styles} from './Style';
import { Ionicons } from '@expo/vector-icons'; 



const formDate = (time) => {
  console.log(time)
  const date = new Date(time);
  return date.toLocaleDateString();
};


const OrderItem = ({item, onCancel}) => {
  return (
    <View style={styles.containerOrder}>
        
        <View style={styles.containerText}>
          <Text style={styles.dateStyle}> {formDate(item.date)}</Text>
          <Text style={styles.text}>Orden numero: {item.id} </Text>
          <Text style={styles.price}>${item.total}</Text>
        </View>

        <View style={styles.containerDetail}>
          <TouchableOpacity >
            <Ionicons name="trash-outline" size={24}/>
          </TouchableOpacity>
        </View>

    </View>
  )
}

export default OrderItem