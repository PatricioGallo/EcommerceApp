import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cart from '../Screens/Cart/Cart'

const Stack = createNativeStackNavigator();

const CartNavigation = () => {
  return (
    
        <Stack.Navigator 
        initialRouteName='Cart'
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

            <Stack.Screen name="Cart" 
            component={Cart}
            options={
              {
                title: 'Carrito',
              }
            }
            />
            
        </Stack.Navigator>
  )
}

export default CartNavigation