import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import ProductsOverview from '../screens/shop/ProductsOverview';
import ProductDetails from '../screens/shop/ProductDetails';
import ShoppingCart from '../screens/shop/ShoppingCart';
import ShopData from '../data/ShopData';
import StormCenterLogoTitle from '../components/StormCenterLogoTitle';

const Stack = createStackNavigator();

export default ShopStack = () => {
  // TODO: not sure if having this ShopData context here will make a new fetch call
  //       each time we navigate to this tab...

  const shopScreenOptions = {
    headerTitle: (props) => <StormCenterLogoTitle {...props} />
  }

  return (
    <ShopData> 
      <Stack.Navigator initialRouteName="Shop" screenOptions={shopScreenOptions}>
        <Stack.Screen name="Shop" component={ProductsOverview} options={{headerTitleAlign: 'center'}}/>
        <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerTitleAlign: 'center'}}/>
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} options={{headerTitleAlign: 'center'}}/>
      </Stack.Navigator>
    </ShopData>
  );
}