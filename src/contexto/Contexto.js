import React, { createContext } from 'react';

const StoreContext = createContext({
  userInfo: {},
  isOnline: false,
  loading: true,
  products: [],
  setProducts: [],
  productsCtg: [],
  productsFiltred: [],
  setProductsFiltred: [],
  getProducts: () => {},
  deleteProduct: (id) => {},
  userLogin: (email, password) => {},
  userLogout: () => {},
  cartItems: [],
  addToCart: (product) => {},
  removeFromCart: (product) => {},
  deleteFromCart: (product) => {},
  clearCart: () => {},
  createOrder: (order) => {},
});
export default StoreContext;