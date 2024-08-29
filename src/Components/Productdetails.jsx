import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from 'react-bootstrap';
import { fetchCurrentProduct } from '../Redux/actions/actions'
import { useParams } from "react-router-dom"

// import Breadcrumbs from "./breadcrumb";

export default function ProductDetails() {
    // const params = useParams()
    // const[product, setProduct] = useState({});
    // useEffect(()=> {
    //     axios.get(`https://fakestoreapi.com/products/${params.id}`).then(res=>{
    //         const prod = res.data
    //         setProduct(prod)
    //     })
    // })

    // const breadcrumbs = [
    //     { label: 'Products', link: '/product' },
    //     { label: 'Product Detail' },
    // ];
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.currentProduct);

    useEffect(() => {
        dispatch(fetchCurrentProduct(id));
    }, [dispatch]);
    return (
        <>
          {product && (
            <div>
                <div className="product-detail-main-wrapper">
                    <Container>
                        <Row>
                            <Col md={6}>
                                <div className="product-detail-image-wrapper">
                                    <div className="product-detail-image">
                                        <img src={product.image} alt={product.title} />
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="product-detail-info">
                                    <h5>{product.category}</h5>
                                    <h4>{product.title}</h4>
                                    <p className="list-item-description">{product.description}</p>
                                    <div className="price-btn">
                                        <div className="price-data">
                                            Price - <span>${parseFloat(product.price).toFixed(2)}</span>
                                        </div>
                                        <button className="btn-add-cart">Add to cart</button>
                                    </div>
                                    <div className="rate-name">Rating - <span>{product?.rating?.rate}</span></div>
                                    <div className="count-name">Count - <span>{product?.rating?.count}</span></div>
                                </div>
                            </Col>
                        </Row>
                        
                    </Container>
                </div>
              
            </div>
          )}
        </>
      );
    };