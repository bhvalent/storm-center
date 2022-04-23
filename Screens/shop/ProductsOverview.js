import React from 'react'
import { Text, View, FlatList, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform, Alert } from 'react-native'

import PRODUCTS from '../../data/dummy-products'
import PressableCard from '../../components/ui/PressableCard'

export default function ProductsOverview({ style, ...rest }) {
  const products = PRODUCTS;

  const renderItem = ({ item }) => {
    return (
      <PressableCard style={styles.card}>
        <View style={styles.cardContents}>
          <Text>{item.name}</Text>
        </View>
      </PressableCard>
    );
  }

  return (
    <FlatList data={products} keyExtractor={item => item.id} renderItem={renderItem} />
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10
  },
  cardContents: {
    padding: 20
  }
})