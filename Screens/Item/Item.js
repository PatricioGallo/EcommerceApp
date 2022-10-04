import React from 'react'
import {View , Text} from 'react-native';
import {styles} from './styles';
import ProductItem from '../../Components/ProductItem/ProductItem';
import { Breads } from '../../Data/Breads';

const Item = ({route}) => {

  const productFind = Breads.find( (bread) => { return bread.id === route.params.productId });


  return (
    <View style={styles.container}>
       <ProductItem item={productFind}/>
    </View>
  )
}

export default Item