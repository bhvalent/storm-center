import React from 'react'
import { Text, View, FlatList, StyleSheet, Image } from 'react-native';

import PRODUCTS from '../../data/dummy-products'
import PressableCard from '../../components/ui/PressableCard'
import { getColors } from '../../constants/theme';
import RegularText from '../../components/ui/RegularText';

const colors = getColors();

export default function ProductsOverview({ style, navigation, ...rest }) {
  const products = PRODUCTS;
  
  const onPressHandler = (id) => {
    navigation.navigate('ProductDetails', { id });
  }

  const renderItem = ({ item }) => {
    return (
      <PressableCard style={styles.card} onPress={() => onPressHandler(item.id)}>
        <View style={styles.cardContents}>
          <Image 
            source={{ uri: item.imageUrl }}
            style={styles.image}
          />
          <RegularText>{item.name}</RegularText>
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
    margin: 10,
    backgroundColor: colors.darkGrey
  },
  cardContents: {
    padding: 20,
    alignItems: 'center'
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 10
  }
})