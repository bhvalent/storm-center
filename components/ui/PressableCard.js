import React from 'react'
import { StyleSheet, View, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native'

const PressableCard = props => {
  let CardComponent = TouchableOpacity;
  if (Platform.Version >= 21) {
    CardComponent = TouchableNativeFeedback;
  }

  return (
    <View style={{ ...styles.cardContainer, ...props.style }}>
      <CardComponent onPress={props.onPress}>
        {props.children}
      </CardComponent>
    </View>
  );
}


const styles = StyleSheet.create({
  cardContainer: {
    // shadow props for iOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    // elevation for Android
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden'
  }
})

export default PressableCard;
