import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ShoppingCart({ style, ...rest }) {
  return (
    <View style={[styles.container, style]} {...rest}>
      <Text>Behold, the ShoppingCart!</Text>
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
