import React from 'react'
import { View ,Text } from 'react-native'
import {styles} from './Style';

const ProductItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>Descripcion</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.subtitle}>Precio</Text>
        <Text style={styles.description}>${item.price}</Text>
        <Text style={styles.subtitle}>Peso</Text>
        <Text style={styles.description}>{item.weight}</Text>
      </View>  
    </View>
  )
}

export default ProductItem