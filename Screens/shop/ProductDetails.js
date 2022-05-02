import React from 'react';
import { StyleSheet, View, Image, useWindowDimensions, Button } from 'react-native';

import { useShopData } from '../../data/ShopData';
import RegularText from '../../components/ui/RegularText';
import MainButton from '../../components/ui/MainButton';
import { getColors } from '../../constants/theme';

const colors = getColors();

export default function ProductDetails({ route }) {
  const { id } = route.params;
  const { products, dispatch } = useShopData();
  const product = products.find(x => x.id === id);
  const windowDimensions = useWindowDimensions();

  const onAddHandler = () => {
    dispatch({
      type: 'add',
      product: product
    });
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.imageUrl }}
        style={{
          ...styles.image,
          width: windowDimensions.width * 0.7,
          height: windowDimensions.height * 0.4
        }}
      />
      <RegularText style={styles.name}>{product.name}</RegularText>
      <RegularText style={styles.description}>{product.description}</RegularText>
      <View style={styles.addToCartContainer}>
        <RegularText style={styles.price}>{product.price.toFixed(2)}</RegularText>
        <MainButton style={styles.btn} onPress={onAddHandler}>ADD TO CART</MainButton>
      </View>
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
    borderRadius: 25
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24
  },
  description: {
    textAlign: 'center',
    color: colors.veryLightGrey
  },
  btn: {
    marginTop: 20
  },
  addToCartContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-evenly',
    width: '100%'
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10
  }
})