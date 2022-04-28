import React from 'react';
import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';

import { useShopData } from '../../data/ShopData';

export default function ProductDetails({ style, route, ...rest }) {
  const { id } = route.params;
  const { products } = useShopData();
  const product = products.find(x => x.id === id);
  const windowDimensions = useWindowDimensions();

  return (
    <View style={[styles.container, style]} {...rest}>
      <Image
        source={{ uri: product.imageUrl }}
        style={{
          ...styles.image,
          width: windowDimensions.width * 0.7,
          height: windowDimensions.height * 0.4
        }}
      />
      <Text>{product.name}</Text>
      <Text style={{ textAlign: 'center' }}>{product.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 20
  },
  image: {
    resizeMode: 'cover',
    margin: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 25
  }
})