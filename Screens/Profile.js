import React from 'react';
import { StyleSheet, View } from 'react-native';

import RegularText from '../components/ui/RegularText';

export default function Profile({ style, ...rest }) {
  return (
    <View style={[styles.container, style]} {...rest}>
      <RegularText>Behold, the Profile!</RegularText>
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
