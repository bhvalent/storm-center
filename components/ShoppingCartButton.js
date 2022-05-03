import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome';
import { getColors } from '../constants/theme';
import { useShopData } from '../data/ShopData';

const colors = getColors();

export default function ShoppingCartButton({ style, onPress, ...rest }) {
  const { state } = useShopData();
  const shoppingCartCount = state.shoppingCart.length;

  let badge = null;
  if (shoppingCartCount > 0) {
    badge = (
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{shoppingCartCount}</Text>
      </View>
    );
  }

  return (
    <View style={[styles.button, style]} {...rest}>
      {badge}
      <FontAwesomeIcon color={colors.white} size={28} name='shopping-cart'  onPress={onPress}/>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    marginHorizontal: 20,
    flex: 1
  },
  badgeText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
    color: colors.black
  },
  badge: {
    backgroundColor: colors.lightBlue,
    borderRadius: 15,
    position: 'absolute',
    paddingVertical: 1,
    paddingHorizontal: 5,
    zIndex: 1,
    right: -10,
    top: -10
  }
})