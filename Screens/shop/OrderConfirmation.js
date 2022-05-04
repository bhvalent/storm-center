import React from 'react';
import { StyleSheet, View } from 'react-native';

import RegularText from '../../components/ui/RegularText';

export default OrderConfirmation = () => {
  return (
    <View style={styles.container}>
      <RegularText>Thanks for shopping!</RegularText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});