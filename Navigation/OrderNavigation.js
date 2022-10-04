import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Orders from '../Screens/Orders/Orders'

const Stack = createNativeStackNavigator();

const OrderNavigation = () => {
  return (
    
        <Stack.Navigator 
        initialRouteName='orders'
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

            <Stack.Screen name="orders" 
            component={Orders}
            options={
              {
                title: 'Ordenes',
              }
            }
            />
            
        </Stack.Navigator>
  )
}

export default OrderNavigation