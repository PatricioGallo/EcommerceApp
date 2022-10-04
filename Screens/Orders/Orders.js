import React from 'react'
import { FlatList, Text, View } from 'react-native';
import {styles} from './Style';
import OrderItem from '../../Components/OrderItem/OrderItem';
import {OrderList} from '../../Data/OrdersList';


const Orders = () => {

  const renderItem = ({item}) => {
    return(
      <OrderItem item={item} />
    )
  
  };

  return (
    <View style={styles.container}>
        <FlatList 
          data={OrderList}
          renderItem={renderItem}
          keyExtractor={ item => item.id}
          style={styles.flatList}
        />
    </View>
  )
}

export default Orders