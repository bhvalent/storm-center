import React from 'react'
import { StyleSheet, View } from 'react-native'
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome';
import { getColors } from '../constants/theme';

export default function ShoppingCartButton({ style, onPress, ...rest }) {
  const colors = getColors();

  return (
    <View style={[styles.button, style]} {...rest}>
      <FontAwesomeIcon color={colors.white} size={28} name='shopping-cart' onPress={onPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    marginHorizontal: 20
  }
})