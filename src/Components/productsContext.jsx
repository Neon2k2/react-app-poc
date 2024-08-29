import React, { createContext, useState, useEffect } from 'react';
import apiService from '../service/apiService';
 
const ProductContext = createContext();
 
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await apiService.fetchProducts();
      setProducts(productsData);
    };

    fetchProducts();
  }, []);
 
  // useEffect(() => {
  //   // Fetch products from API
  //   axios('https://fakestoreapi.com/products')
  //   .then(res=>{
  //       const prod = res.data
  //       setProducts(prod)
  //     })
  //     .catch(error => console.error('Error fetching products:', error));
  // }, []);
 
  return (
  <ProductContext.Provider value={products}>
        {children}
  </ProductContext.Provider>
  );
};
 
export { ProductContext, ProductProvider };