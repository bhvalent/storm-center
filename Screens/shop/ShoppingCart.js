import React from 'react';
import { StyleSheet, View } from 'react-native';

import RegularText from '../../components/ui/RegularText';

export default function ShoppingCart({ style, ...rest }) {
  return (
    <View style={[styles.container, style]} {...rest}>
      <RegularText>Behold, the ShoppingCart!</RegularText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
