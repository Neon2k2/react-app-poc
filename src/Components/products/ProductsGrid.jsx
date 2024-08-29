import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductItem from './ProductItem'

export default function ProductsGrid({products}) {
    const navigate = useNavigate()

    const createProductLink=()=>{
        navigate("/createproductform");
    };
    const productTableView=()=>{
        navigate("/producttableview");
    }
    const productTableMaterial=()=>{
        navigate("/producttablematerial");
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='title-wrapper'>
                <h1 className='page-title'>Products</h1>
                <div className=''>
                    {/* <Link to={'/createproductform'} className="ecomm-link">Create Product</Link> */}
                    <button onClick={() => createProductLink()} className="common-btn"  type="submit" >Create Product</button>
                    <button onClick={() => productTableView()} className="common-btn"  type="submit" >Product table view</button>
                    <button onClick={() => productTableMaterial()} className="common-btn"  type="submit" >Product table Matrial</button>
                </div>
            </div>
            <div className='product-list-wrapper'>
                {
                    products?.length > 0 ? products.map(item => (
                        <ProductItem key={item.id} product = {item} />
                    )) : <h5 className='no-data'>No Data Found</h5>

                    // products.map((item)=> <ProductItem key={item.id} product = {item} />)
                }
            </div>
        </div>
    </div>
  )
}
