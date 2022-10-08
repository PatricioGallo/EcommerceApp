import React from 'react'
import {View , FlatList} from 'react-native';
import { styles } from './styles';
import ProductList from '../../Components/ProductList/ProductList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filteredBread } from '../../store/action/bread.action';
import { selectBread } from '../../store/action/bread.action';


const ItemList = ({navigation}) => {

  const filteredBreads = useSelector( state => state.breads.breadsFilter);
  const selectedCategory = useSelector( state => state.categories.selected);
  const dispatch = useDispatch();
  console.log(selectedCategory)

  useEffect(() => 
    dispatch(filteredBread(selectedCategory.id)),[]); 

  const onSelected = (item) => {
    dispatch(selectBread(item.id));
    navigation.navigate('Item',{
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
        data={filteredBreads}
        renderItem={renderItemList}
        keyExtractor={item => item.id}
        style={styles.flatList}
      />

    </View>
  )
}

export default ItemList