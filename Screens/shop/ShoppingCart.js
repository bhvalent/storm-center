import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

import MainButton from '../../components/ui/MainButton';
import PressableCard from '../../components/ui/PressableCard';
import Card from '../../components/ui/Card';
import RegularText from '../../components/ui/RegularText';
import { getColors } from '../../constants/theme';
import { useShopData } from '../../data/ShopData';

const colors = getColors();

export default ShoppingCart = ({ navigation }) => {
  const { state, dispatch } = useShopData();

  const onCheckoutHandler = () => {
    navigation.navigate('OrderConfirmation');
    dispatch({ type: 'checkout' });
  }

  const onDeleteHandler = (id) => {
    dispatch({
      type: 'delete',
      id: id
    });
  }

  const renderRight = (id) => {
    // TODO: Delete button is only partially pressable with animation

    return (
      // <View style={styles.deleteBtnContainer}>
        <PressableCard style={styles.deleteBtn} onPress={() => onDeleteHandler(id)}>
          <View>
            <RegularText>Delete</RegularText>
          </View>
        </PressableCard>
      // </View>
    );
  }

  const renderItem = ({ item }) => {
    const { product, id } = item;
    return (
      <Swipeable renderRightActions={() => renderRight(id)} overshootRight={false}>
        <Card style={styles.card}>
          <View>
            <RegularText>{product.name}</RegularText>
            <RegularText style={styles.itemPrice}>{product.price.toFixed(2)}</RegularText>
          </View>
        </Card>
      </Swipeable>
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
        <View style={styles.listContainer}>
          <FlatList data={state.shoppingCart} keyExtractor={item => item.id} renderItem={renderItem} />
        </View>
        <View style={styles.stickyFooter}>
          <RegularText style={styles.cartTotal}>TOTAL: {state.shoppingCart.reduce((total, current) => total + current.product.price, 0).toFixed(2)}</RegularText>
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
  listContainer: {
    marginBottom: 60
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
  },
  deleteBtnContainer: {
    // justifyContent: 'center',
    // paddingVertical: 20
  },
  deleteBtn: {
    backgroundColor: colors.red,
    justifyContent: 'center',
    marginVertical: 10,
    marginRight: 10
  }
})
