import React from 'react'
import {View,FlatList, TextInput, Text} from 'react-native';
import {styles} from './styles';
import CategoryItem from '../../Components/CategoryItem/CategoryItem';
import { Ionicons } from '@expo/vector-icons'; 
import { Breads } from '../../Data/Breads';
import ProductCategory from '../../Components/ProductCategory/ProductCategory';
import { useSelector , useDispatch} from 'react-redux';
import { selectCategory } from '../../store/action/category.action';
import { selectBread } from '../../store/action/bread.action';

const Categories = ({navigation}) => {

  const breadsFilter = Breads.filter( (item) => item.offer === true);
  const categories = useSelector(state => state.categories.categories);
  const dispatch = useDispatch();

  const onSelected = (item) =>{
    dispatch(selectCategory(item.id));
    navigation.navigate('ItemList',{
      name: item.title,
    })
  };

  const onSelectedProducts = (item) => {
    dispatch(selectBread(item.id));
    navigation.navigate('Item',{
      name: item.title,
    })
  };

  const RenderCategoryList = ({item}) => {
    return(
    <CategoryItem item={item} onSelected={onSelected}/>
    )
  };

  const renderProducts = ({item}) => { 
    return(
    <ProductCategory item={item} onSelectedProducts={onSelectedProducts} />
  )};

  return (
    <View style={styles.container}>

      <View style={styles.filterBox}> 
        <View style={styles.seeker}>
          <TextInput style={styles.textInput} placeholder="Buscar"/>
          <Ionicons name="search" size={22} />
        </View>
      </View>

      <View style={styles.containerFlat}>
        <FlatList 
          data={categories}
          keyExtractor= {item => item.id}
          renderItem={RenderCategoryList}
          style={styles.flatList}
          horizontal={true}
          indicatorStyle="white"
        />
      </View>  

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Productos destacados</Text>
      </View>

      <View style={styles.containerFlat}>

      <FlatList 
          data={breadsFilter}
          keyExtractor= {item => item.id}
          renderItem={renderProducts}
          style={styles.flatList}
          horizontal={true}
          indicatorStyle="white"
        />
      </View>  
        

    </View>
  )
}

export default Categories