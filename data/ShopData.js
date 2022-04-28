import React, { useState } from 'react';
import PRODUCTS from './dummy-products';

const ShopContext = React.createContext();

export default ShopData = ({ children }) => {
  const dummyProducts = PRODUCTS;
  const [products, setProducts] = useState(dummyProducts);

  // normally, we would use the useEffect hook to fetch the product data for the context

  return (
    <ShopContext.Provider value={{products}}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShopData() {
  const context = React.useContext(ShopContext);
  return context;
}