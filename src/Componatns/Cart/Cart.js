import React from 'react';
import { removeFromCart } from '../../Redux/Actions/cartAction';
import { connect } from 'react-redux';


const Cart = (props) => {
  console.log();
    const {cart , removeFromCart} = props;
    return (
        <div>
            {
                cart.map(item => <li>{item.productName}<button onClick={()=>removeFromCart(item.cartId)}>x</button></li>)
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
    removeFromCart:removeFromCart
  }

export default connect(mapStateToProps, mapDispatchToProps)(Cart);