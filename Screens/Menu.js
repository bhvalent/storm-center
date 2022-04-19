import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Menu({ style, ...rest }) {
  return (
    <View style={[styles.container, style]} {...rest}>
      <Text>Behold, the Menu!</Text>
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
