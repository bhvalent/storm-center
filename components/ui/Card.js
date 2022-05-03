import React from 'react'
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native'

const Card = props => {
  return (
    <View style={{ ...styles.cardContainer, ...props.style }}>
      <TouchableWithoutFeedback onPress={props.onPress}>
        {props.children}
      </TouchableWithoutFeedback>
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

export default Card;
