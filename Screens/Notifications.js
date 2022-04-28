import React from 'react';
import { StyleSheet, View } from 'react-native';

import RegularText from '../components/ui/RegularText';

export default function Notifications({ style, ...rest }) {
  return (
    <View style={[styles.container, style]} {...rest}>
      <RegularText>Behold, the Notifications!</RegularText>
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
