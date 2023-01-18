 import { useState } from 'react';
import Data from '../../data.json';
import Cart from '../Cart/Cart';
import Product from '../Product/Product.js';

import './Shop.css';


const Shop = () => {
    const first15=Data.slice(0,15);
    const [products]=useState(first15);
    const[cart,setCart]=useState([]);

    const handleAddProduct=(product)=>{
        
        const newCart=[...cart,product];
        setCart(newCart);
    }

     return (
<div className='shop-container'>


<div className='product-container'>
    {
       products.map(product=><Product handleAddProduct={handleAddProduct} product={product}></Product>)
    }

</div>
<div className='cart-container'>

<Cart cart={cart}></Cart>

</div>
</div>
     );       
       

};

export default Shop;