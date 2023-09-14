
import React from 'react';

const Product = (props) => {

    
    const {addToCart,product,cart}=props;
    return (
        <div style={{border:"1px solid tomato"}}>
       
           <h2>{product.name}</h2>
           <button onClick={()=>addToCart(product.id,product.name)}>add to cart </button>
        </div>
    );
};

export default Product;