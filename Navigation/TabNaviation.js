import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 

import ShopNavigation from './ShopNavigation';
import CartNavigation from './CartNavigation';
import OrderNavigation from './OrderNavigation';


const bottomTab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
        <bottomTab.Navigator 
            initialRouteName="Shop"
            screenOptions={{
                headerShown: false,
            }}
        >
            <bottomTab.Screen 
                name= "Shop"
                component={ShopNavigation}
                options={{
                    title: "HOME",
                    tabBarIcon: ({focused}) => {return(
                    focused ? <Ionicons name="home" size={24} color="black" /> : <Ionicons name="home-outline" size={24} color="black" /> )},
                    tabBarActiveTintColor:"black",
                }}
            />
            <bottomTab.Screen 
                name= "CartTab"
                component={CartNavigation}
                options={{
                    title: "CARRITO",
                    tabBarIcon: ({focused}) => {return(
                        focused ? <Ionicons name="cart" size={24} color="black" /> : <Ionicons name="cart-outline" size={24} color="black" /> )},
                        tabBarActiveTintColor:"black",
    
                }}
            />
            
            <bottomTab.Screen 
                name= "orderTab"
                component={OrderNavigation}
                options={{
                    title: "ORDENES",
                    tabBarIcon: ({focused}) => {return(
                        focused ? <Ionicons name="file-tray-full" size={24} color="black" /> : <Ionicons name="file-tray-outline" size={24} color="black" /> )},
                        tabBarActiveTintColor:"black",                    
                }}
            />
        </bottomTab.Navigator>
    )
};

export default TabNavigator;