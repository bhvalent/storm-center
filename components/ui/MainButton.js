import React from 'react'
import { StyleSheet, Text, View, Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import { getColors } from '../../constants/theme';

const colors = getColors();

export default MainButton = ({ children, onPress, style }) => {

  let ButtonComponent = TouchableOpacity;
  if (Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={[style, styles.btnContainer]}>
      <ButtonComponent onPress={onPress}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>{children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnContainer: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  btn: {
    backgroundColor: colors.lightBlue,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  btnText: {
    color: colors.black,
    fontSize: 18,
    fontWeight: 'bold'
  }
});