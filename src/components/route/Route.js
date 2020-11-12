import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../home/HomeScreen';
import Cart from '../cart/Cart';
import Account from '../account/Account';


const Tab = createBottomTabNavigator();
export default function Route() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Cart" component={Cart} />
                <Tab.Screen name="Account" component={Account} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
