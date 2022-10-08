import React from 'react'
import {View , Text} from 'react-native';
import {styles} from './styles';
import ProductItem from '../../Components/ProductItem/ProductItem';
import { Breads } from '../../Data/Breads';
import { useSelector } from 'react-redux';

const Item = () => {

  const productFind = useSelector( state => state.breads.selected)

  return (
    <View style={styles.container}>
       <ProductItem item={productFind}/>
    </View>
  )
}

export default Item