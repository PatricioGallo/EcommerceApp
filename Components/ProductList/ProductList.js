import React from 'react';
import { View,Text, TouchableOpacity } from 'react-native';
import { styles} from './Style';


const ProductList = ({item, onSelected}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity 
            onPress={()=> onSelected(item)}
            style={styles.Opacity}
        >
            <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ProductList