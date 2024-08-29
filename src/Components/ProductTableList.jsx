import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductTableMaterialUI from '../Components/products/ProductTableMaterialUI';
import apiService from '../service/apiService';

export default function ProductTableList() {
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
  //   const fetchProducts = async () => {
  //     const productsData = await apiService.fetchProducts();
  //   // axios.get('https://fakestoreapi.com/products')
  //   //   .then(res => {
  //       setProducts(productsData);
  //     })
  //     .catch(error => console.error('Error fetching products:', error));
  // }, []);

  return (
    <div className='producttablelistwrapper'>
      <Container>
        <Row>
          <Col>
            <h1 className='page-title'>Product List</h1>
            <ProductTableMaterialUI productList={products} />
          </Col>
        </Row>
        </Container>
    </div>
  );
}
