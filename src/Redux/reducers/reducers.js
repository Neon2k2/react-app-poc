import {ACTIONS} from '../constants/constants';

const initialState = { products: [] };

export const allProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_ALL_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const productReducer = (state = { currentProduct: null }, action) => {
  switch (action.type) {
      case ACTIONS.SET_CURRENT_PRODUCTS:
        return { ...state, currentProduct: action.payload };
      default:
        return state;
    }
};