import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../component/Product'
import { fetchProducts } from '../redux/action'

function ProductListing() {
    const product = useSelector(state => state)
    const dispatch = useDispatch()

    // const getData = async () => {
    //     let response = await axios.get(`https://fakestoreapi.com/products`)
        // console.log(response.data);
    //     dispatch(setProduct(response.data))
    // }

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    console.log(product);

    return (
        <div className="container py-3">
            <h1 className="text-dark">All Category</h1>
            <hr/>
            <div className="row">
                    <Product />
            </div>
        </div>
    )
}

export default ProductListing
