import React, { useState } from 'react';
import PRODUCTS from './dummy-products';

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.product]
      }
    case 'checkout':
      // do checkout logic (api call etc.)
      return {
        ...state,
        shoppingCart: []
      }
  }
}

const initialState = {
  shoppingCart: []
}

const ShopContext = React.createContext();

export default ShopData = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const dummyProducts = PRODUCTS;
  const [products, setProducts] = useState(dummyProducts);

  // normally, we would use the useEffect hook to fetch the product data for the context

  return (
    <ShopContext.Provider value={{ products, state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShopData() {
  const context = React.useContext(ShopContext);
  return context;
}