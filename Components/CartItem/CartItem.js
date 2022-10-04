import React from 'react';
import {styles} from './Style';
import { View, Text, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const CartItem = ({item,onDelete}) => {
  return (
    <View style={styles.CartContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.content}>
            <View>
                <Text style={styles.textContent}>Cantidad: {item.quantity}</Text>
                <Text style={styles.textContent}>Precio:<Text style={styles.textBold}>${item.price}</Text></Text>
            </View>
            <TouchableOpacity 
                onPress={ () => onDelete(item.id)}
            >
                <Ionicons name="trash-outline" size={24}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CartItem