import React,{useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, } from "../Redux/actions/actions";
import ProductsGrid from './products/ProductsGrid';

export default function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProducts.products);
    // const products = useContext(ProductContext);
    // const [products,setProducts]=useState([]);
    // console.log(products)
    useEffect(()=> {
      dispatch(fetchAllProducts());
    }, [dispatch]);
    // useEffect(()=> {
    //     axios.get('https://fakestoreapi.com/products').then(res=>{
    //         const prod = res.data
    //         setProducts(prod)
    //     })
    // })
    // const [products, setProducts] = useState(productsData.products);
    return(
        <ProductsGrid products={products} />
    )
}