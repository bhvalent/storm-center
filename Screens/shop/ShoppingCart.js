import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import MainButton from '../../components/ui/MainButton';
import PressableCard from '../../components/ui/PressableCard';

import RegularText from '../../components/ui/RegularText';
import { getColors } from '../../constants/theme';
import { useShopData } from '../../data/ShopData';

const colors = getColors();

export default ShoppingCart = ({ navigation }) => {
  const { state, dispatch } = useShopData();

  const onCheckoutHandler = () => {
    navigation.navigate('OrderConfirmation');
    dispatch({type: 'checkout'});
  }

  const renderItem = ({ item }) => {
    return (
      <PressableCard style={styles.card}>
        <View>
          <RegularText>{item.name}</RegularText>
          <RegularText style={styles.itemPrice}>{item.price.toFixed(2)}</RegularText>
        </View>
      </PressableCard>
    );
  }

  let renderShoppingCart = (
    <View style={styles.emptyContainer}>
      <RegularText>Your Shopping Cart is Empty!</RegularText>
    </View>
  );
  if (state.shoppingCart.length > 0) {
    renderShoppingCart = (
      <View style={styles.nonEmptyContainer}>
        <FlatList data={state.shoppingCart} keyExtractor={item => item.id} renderItem={renderItem} />
        <View style={styles.stickyFooter}>
          <RegularText style={styles.cartTotal}>TOTAL: {state.shoppingCart.reduce((total, current) => total + current.price, 0).toFixed(2)}</RegularText>
          <MainButton style={styles.checkoutBtn} onPress={onCheckoutHandler}>CHECKOUT</MainButton>
        </View>
      </View>
    );
  }

  return (
    <>
      {renderShoppingCart}
    </>
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  nonEmptyContainer: {
    flex: 1
  },
  card: {
    backgroundColor: colors.darkGrey,
    margin: 10
  },
  itemPrice: {
    fontSize: 16,
    textAlign: 'right'
  },
  cartTotal: {
    fontWeight: 'bold'
  },
  stickyFooter: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.mediumGrey,
    borderColor: colors.veryLightGrey,
    borderTopWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  },
  checkoutBtn: {
    margin: 10
  }
})
