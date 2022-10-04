import React from 'react'
import { FlatList, Text, View, TouchableOpacity} from 'react-native';
import {styles} from './Style';
import CartItem from '../../Components/CartItem/CartItem';
import {CartList} from '../../Data/CartList'
import {colors} from '../../Contants/Colors'


const Cart = () => {

  const onDelete = (id) => {
  };

  const renderItem = ({item}) => {
    return(
    <CartItem onDelete={onDelete} item={item} />)
  };

  return (
    <View style={styles.container}>
        <FlatList 
          data={CartList}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          style={styles.flatList}
        />
        <View style={styles.confirmButton}>
            <TouchableOpacity 
            style={styles.button}
            onPress={() =>null}
            >
              <Text style={styles.textConfirm}>CONFIRMAR</Text>
              <View style={styles.totalContainer}>
                <Text style={styles.normalText}>Total: </Text>
                <Text style={styles.textConfirm}>$5000</Text>
              </View>
              

            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Cart;