import React from 'react';
import Product from '../Product/Product';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/Actions/cartAction';

const Shop = (props) => {
  console.log(props);
 const {products,addToCart,cart}=props;


  return (
    <div>
      <h1>Shop</h1>
      {
        products.map(pd => (
          <Product
            key={pd.id}
            product={pd}
            addToCart={addToCart} 
            cart={cart}// Pass the action as a prop
          />
        ))
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart
  }
};

const mapDispatchToProps = {
  addToCart: addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
