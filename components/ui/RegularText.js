import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { getColors } from '../../constants/theme';

export default function RegularText({ style, children, onPress }) {
  return (
    <Text style={[styles.text, style]} onPress={onPress}>{children}</Text>
  );
}

const colors = getColors();

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: colors.white,
    margin: 10
  }
});