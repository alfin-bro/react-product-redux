import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Product.css'
function Product() {
    const product = useSelector(state => state.allProduct.product)
    return (
        <Fragment>
            {
                product.map(product => {
                    return (
                        <div className="col-md-3" key={product.id}>
                            <div className="card-wrapper">
                                <div className="img-box">
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <div className="content">
                                    <h6 className="product-title">{product.title}</h6>
                                    <h5 className="product-price">$ {product.price}</h5>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h6 className="product-category text-primary">{product.category}</h6>
                                        <Link to={`/product/${product.id}`} className="btn-primary btn">Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </Fragment>
    )
}

export default Product

