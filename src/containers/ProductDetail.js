import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { removeSelectedProduct, fetchProduct } from '../redux/action';

function ProductDetail() {
    const product = useSelector((state) => state.product)
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(product);

    const getDetails = async () => {
        let response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        dispatch(fetchProduct(productId));
    }

    useEffect(() => {
        if (productId && productId !== '') getDetails();
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId]);

    return (
        <div className="container py-4 d-flex">
            {
                Object.keys(product).length === 0 ? (<div>...Loading</div>) :
                    <div className="row">
                        <div className="col-md-5">
                            <div className="img-box" style={{ width: "100%", height: "500px" }}>
                                <img src={product.image} style={{ width: "80%" }} />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <h1 className="py-4 ">{product.title}</h1>
                            <h2 className="PY-3 text-info">$ {product.price}</h2>
                            <h5 className="py-4 text-capitalize">{product.category}</h5>
                            <p className="text-muted text-capitalize">{product.description}</p>
                        </div>
                    </div>
            }
        </div>
    )
}

export default ProductDetail
