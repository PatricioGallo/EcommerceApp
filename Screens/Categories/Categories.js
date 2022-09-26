import React from 'react'
import {View , Text, Button} from 'react-native';
import {styles} from './styles';


const Categories = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text>Categorias</Text>
        <Button 
          title="ir a Item List"
          onPress={() => {navigation.navigate('ItemList')}}
        />
    </View>
  )
}

export default Categories