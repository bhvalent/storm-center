import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import ProductsOverview from '../screens/shop/ProductsOverview';
import ProductDetails from '../screens/shop/ProductDetails';
import ShoppingCart from '../screens/shop/ShoppingCart';
import ShopData from '../data/ShopData';

const Stack = createStackNavigator();

export default ShopStack = () => {
  // TODO: not sure if having this ShopData context here will make a new fetch call
  //       each time we navigate to this tab...

  return (
    <ShopData> 
      <Stack.Navigator initialRouteName="Shop" screenOptions={{headerTitle: ''}}>
        <Stack.Screen name="Shop" component={ProductsOverview} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
      </Stack.Navigator>
    </ShopData>
  );
}