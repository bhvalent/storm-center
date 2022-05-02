import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, StyleSheet } from 'react-native';

import OrderConfirmation from '../screens/shop/OrderConfirmation';
import ProductsOverview from '../screens/shop/ProductsOverview';
import ProductDetails from '../screens/shop/ProductDetails';
import ShoppingCart from '../screens/shop/ShoppingCart';
import ShopData from '../data/ShopData';
import StormCenterLogoTitle from '../components/StormCenterLogoTitle';
import ShoppingCartButton from '../components/ShoppingCartButton';
import RegularText from '../components/ui/RegularText';

const Stack = createStackNavigator();

export default ShopStack = () => {
  // TODO: not sure if having this ShopData context here will make a new fetch call
  //       each time we navigate to this tab...

  return (
    <ShopData>
      <Stack.Navigator
        initialRouteName="Shop"
        screenOptions={
          ({ navigation }) => ({
            headerRight: () => <ShoppingCartButton onPress={() => navigation.navigate('ShoppingCart')} />,
            headerTitle: (props) => <StormCenterLogoTitle {...props} />
          })
        }
      >
        <Stack.Screen name="ProductsOverview" component={ProductsOverview} options={{ headerTitleAlign: 'center' }} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerTitleAlign: 'center' }} />
        <Stack.Screen
          name="ShoppingCart"
          component={ShoppingCart}
          options={{
            headerTitleAlign: 'center',
            headerRight: () => { },
            headerTitle: "Shopping Cart"
          }}
        />
        <Stack.Screen
          name="OrderConfirmation"
          component={OrderConfirmation}
          options={
            ({ navigation }) => ({
              headerTitleAlign: 'center',
              headerRight: () => <RegularText onPress={() => navigation.popToTop()} style={styles.closeBtn}>CLOSE</RegularText>
            })
          }
        />
      </Stack.Navigator>
    </ShopData>
  );
}

const styles = StyleSheet.create({
  closeBtn: {
    fontSize: 16
  }
});