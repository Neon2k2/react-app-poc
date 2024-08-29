import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductItem({product}) {
  return (
      <div className='list'>
        <Link to={`/product/${product.id}`}>
            <div className="list-item">
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                  {/* <img src={product.image} alt="Product Image" /> */}
                </div>
                <div className="product-info">
                    <h4>{product.title}</h4>
                    <h5>{product.category}</h5>
                    <p className="list-item-description">{product.description}</p>
                    <div className="price-data">
                      Price - $ <span>{parseFloat(product.price).toFixed(2)}</span>
                    </div>
                    <div className="rate-name">Rating - <span>{product.rating.rate}</span></div>
                    <div className="count-name">Count - <span>{product.rating.count}</span></div>
                </div>
            </div>
        </Link>
      </div>
  )
}
