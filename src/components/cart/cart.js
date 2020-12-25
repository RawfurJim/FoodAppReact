import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./cart.css";

class Cart extends Component {
  
  calculateTotalPrice = (total, item) => {
    const itemPrice = item.quantity * item.price;
    return total + itemPrice;
  };
  handleCheckout = () => {
    this.props.history.push("/checkout");
  };

  render() {

    return (
      <div className="cart">
          <div
            className="close-icon-container"
            onClick={() => this.props.onClose()}
          >
            <i class="fa fa-times close-icon"></i>
          </div>
        {
          this.props.cartItems.length !== 0 ?
          <>
            <div className="cart-items">
                {
                  this.props.cartItems.map((item) => (
                    <div key={item._id} className="itemInline">
                      <p style={{ width: "40%" }}>{item.name}</p>
                      <img
                        src={item.productImage}
                        alt="Logo"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <p style={{ margin: "4px", padding: "10px" }}>
                        {item.quantity}
                      </p>
                    </div>
                  ))
                }
            </div>
            <div className="divider" />
            <div className='total-price'>
              <span>Total price </span>
              <span>
                {
                  this.props.cartItems.reduce(this.calculateTotalPrice, 0)
                }
                {' '}
                Tk
              </span>
            </div>
            <button
              type="button"
              onClick={this.handleCheckout}
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
}

Cart.defaultProps = {
  cartItems: [],
};

export default withRouter(Cart);
