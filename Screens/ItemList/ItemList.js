import React from 'react'
import {View , Text, Button} from 'react-native';
import { styles } from './styles';

const ItemList = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text>ItemList</Text>
        <Button 
          title="ir al item"
          onPress={() => {navigation.navigate('Item')}}
        />
    </View>
  )
}

export default ItemList