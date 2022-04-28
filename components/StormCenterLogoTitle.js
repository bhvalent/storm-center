import React from 'react'
import { Image } from 'react-native'

export default StormCenterLogoTitle = () => {
  return (
    <Image
      style={{ width: 200, height: 48 }}
      source={require('../assets/storm-center-logo.png')}
    />
  );
}