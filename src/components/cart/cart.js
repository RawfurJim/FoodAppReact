import React from "react";
import { withRouter } from "react-router-dom";
import { useCart } from "../../hooks/use-cart";
import "./cart.css";

const Cart = (props) => {
  const { cartItems, totalPrice, clearCart }  = useCart()
  
  const handleCheckout = () => {
    props.history.push("/checkout");
  };

  return (
    <div className="cart">
      <div className="cart-header">
        {
          cartItems.length !== 0 ? 
          <div
            className="clear-cart"
            onClick={clearCart}>
            Clear
          </div>: null
        }
        
        <div
          style={{marginLeft: 'auto'}}
          className="close-icon-container"
          onClick={() => props.onClose()}
        >
          <i className="fa fa-times close-icon"></i>
        </div>
      </div>
      {
        cartItems.length !== 0 ?
        <>
          <div className="cart-items">
              {
                cartItems.map((item) => (
                  <div key={item._id} className="cart-item">
                    <img
                      src={item.productImage}
                      alt="cart item"
                    />
                    <div className="item-info">
                      <p>{item.name}</p>
                      <p className='quantity'>quantity: {item.quantity}</p>
                    </div>
                  </div>
                ))
              }
          </div>
          <div className="divider" />
          <div className='total-price'>
            <span>Total price </span>
            <span>
              { totalPrice } Tk
            </span>
          </div>
          <button
            type="button"
            onClick={handleCheckout}
            className="btn"
          >
            Checkout
          </button>
        </>
        :
        <div className="empty-cart">
          Your cart is empty
        </div>
      }
    </div>
  ) 
}

export default withRouter(Cart);
