import axios from "axios";
import apiService from "../../service/apiService";
import fetchProducts from "../../service/apiService"
const { ACTIONS } = require('../constants/constants');

export const setAllProducts = (products) => {
  return {
      type: ACTIONS.SET_ALL_PRODUCTS,
      payload: products,
  };
};

export const setCurrentProduct = (products) => {
  return {
      type: ACTIONS.SET_CURRENT_PRODUCTS,
      payload: products,
  };
};

export const fetchAllProducts = () => {
  return async(dispatch) => {
      // const res = await axios.get('https://fakestoreapi.com/products');
      // const data = await res.data;
      const data = await apiService.fetchProducts();
      dispatch(setAllProducts(data));
  };
};

// async action creator
export const fetchCurrentProduct = (productId) => {
  return async (dispatch) => {
    // const { data: product } = await axios.get("https://fakestoreapi.com/products/" + productId);
    const product = await apiService.fetchProductsById(productId);
    dispatch(setCurrentProduct(product));
  };
};
