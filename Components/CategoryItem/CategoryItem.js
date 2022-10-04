import React from 'react'
import { View , Text, TouchableOpacity} from 'react-native';
import { styles } from './Style';

const CategoryItem = ({item, onSelected}) => {
  return (
        <TouchableOpacity
            style={{...styles.Opacity , backgroundColor: item.color}}
            onPress= { () => onSelected(item)}
        >
            <View>
                <Text style={styles.title}>{item.title}</Text>
            </View>

        </TouchableOpacity>
  )
}

export default CategoryItem