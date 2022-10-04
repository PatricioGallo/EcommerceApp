import React from 'react'
import {View , Text, Button, FlatList} from 'react-native';
import { styles } from './styles';
import { Breads} from '../../Data/Breads';
import ProductList from '../../Components/ProductList/ProductList';

const ItemList = ({navigation,route}) => {

  const breadFilter = Breads.filter( (bread) => { return bread.categoryId === route.params.categoryId});

  const onSelected = (item) => {
    navigation.navigate('Item',{
      productId: item.id,
      name: item.title,
    })
  };

  const renderItemList = ({item}) => {
    return(
        <ProductList item={item} onSelected={onSelected}/>
    )
  };
  return (
    <View style={styles.container}>
      <FlatList 
        data={breadFilter}
        renderItem={renderItemList}
        keyExtractor={item => item.id}
        style={styles.flatList}
      />

    </View>
  )
}

export default ItemList