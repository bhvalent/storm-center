import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import PressableCard from '../components/ui/PressableCard';
import { FontAwesome5 } from '@expo/vector-icons';

import RegularText from '../components/ui/RegularText';
import { getColors } from '../constants/theme';

const colors = getColors();
const windowWidth = Dimensions.get('window').width;

export default function Menu() {
  return (
    <View style={styles.screen}>
      <RegularText style={styles.menuHeader}>Menu</RegularText>
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <PressableCard style={styles.card}>
            <View style={styles.cardContents}>
              <FontAwesome5 name="truck" size={36} color={colors.veryLightGrey} />
              <RegularText>Orders</RegularText>
            </View>
          </PressableCard>
          <PressableCard style={styles.card}>
            <View style={styles.cardContents}>
              <FontAwesome5 name="credit-card" size={36} color={colors.veryLightGrey} />
              <RegularText>Payment</RegularText>
            </View>
          </PressableCard>
        </View>
        <View style={styles.row}>
          <PressableCard style={styles.card}>
            <View style={styles.cardContents}>
              <FontAwesome5 name="tools" size={36} color={colors.veryLightGrey} />
              <RegularText>Tools</RegularText>
            </View>
          </PressableCard>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  buttonsContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuHeader: {
    fontSize: 28,
    fontWeight: 'bold',
    marginHorizontal: 20,
    borderBottomColor: colors.mediumGrey,
    borderBottomWidth: 2
  },
  row: {
    flexDirection: 'row',
    width: windowWidth * 0.9,
    justifyContent: 'space-around',
    marginVertical: 10
  },
  card: {
    backgroundColor: colors.darkGrey,
    marginHorizontal: 10,
    width: '40%'
  },
  cardContents: {
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 8
  }
})
