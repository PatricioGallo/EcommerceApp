import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Categories from '../Screens/Categories/Categories';
import Item from '../Screens/Item/Item';
import ItemList from '../Screens/ItemList/ItemList';

const Stack = createNativeStackNavigator();

const ShopNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Categories'>
            <Stack.Screen name="Categories" component={Categories}/>
            <Stack.Screen name="ItemList"component={ItemList} />
            <Stack.Screen name="Item" component={Item}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ShopNavigation