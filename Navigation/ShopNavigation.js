import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from '../Screens/Categories/Categories';
import Item from '../Screens/Item/Item';
import ItemList from '../Screens/ItemList/ItemList';

const Stack = createNativeStackNavigator();

const ShopNavigation = () => {
  return (
        <Stack.Navigator 
        initialRouteName='Categories'
        screenOptions={
          {
            headerStyle:{
              backgroundColor: '#2C8C99'
            },
            headerTintColor: 'white',
            headerTitleStyle:{
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerBackTitleVisible: false,
            
          }
        }
        >
            <Stack.Screen name="Categories" 
            component={Categories}
            options={
              {
                title: 'Inicio',
              }
            }
            />
            <Stack.Screen 
              name="ItemList"
              component={ItemList}
              options= {({route})=> ({
                title : route.params.name
              })}
             />
            <Stack.Screen 
              name="Item"
              component={Item}
               options= {({route})=> ({
                  title : route.params.name
              })}
            />
        </Stack.Navigator>
  )
}

export default ShopNavigation