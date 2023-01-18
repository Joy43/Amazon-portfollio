import React from 'react';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css';





const Product = (props) => {
    //console.log(props);
    
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div>
            </div>
            <img src={img} alt="" />
            <div>
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <br />
                <p><small>Only {stock} left in stock-order soon</small></p>
                <button className='main-button' onClick={()=>props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart}/> add to card</button>
            </div>
        </div>
    );
};

export default Product;