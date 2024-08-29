import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Pagination } from 'react-bootstrap';
import apiService from '../service/apiService';
import axios from 'axios';

export default function ProductTableView(props) {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(5);

    useEffect(() => {
        const fetchProducts = async () => {
          const productsData = await apiService.fetchProducts();
          setProducts(productsData);
        };
        fetchProducts();
      }, []);

    // useEffect(() => {
    //     axios.get('https://fakestoreapi.com/products').then(res => {
    //         const prod = res.data;
    //         setProducts(prod);
    //     });
    // }, []);

    // Pagination code
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    // Change page in pagination
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className='product-table-view-wrapper'>
                            <Table bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Category</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Rate</th>
                                        <th>Count</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentProducts.map((product, index) => (
                                        <tr key={index}>
                                            <td>{product.id }</td>
                                            <td><img className='productimage' src={product.image} alt={product.title} /></td>
                                            <td>{product.title}</td>
                                            <td>{product.category}</td>
                                            <td>{product.description}</td>
                                            <td>{product.price}</td>
                                            <td>{product.rating.rate}</td>
                                            <td>{product.rating.count}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <h2>Product Details</h2>
                            <button onClick={()=>props.data()}>Click</button>
                        </div>
                        <Pagination>
                            {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
                                <Pagination.Item key={index + 1} onClick={() => paginate(index + 1)} active={index + 1 === currentPage} data-testid={`pagination-item`}>
                                    {index + 1}
                                </Pagination.Item>
                            ))}
                        </Pagination>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
