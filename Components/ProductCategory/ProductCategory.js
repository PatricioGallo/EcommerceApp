import React from 'react';
import { View,Text, TouchableOpacity } from 'react-native';
import { styles} from './Style';


const ProductCategory = ({item, onSelectedProducts}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity 
            onPress={()=> onSelectedProducts(item)}
            style={styles.Opacity}
        >
            <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ProductCategory;