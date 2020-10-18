import React, { Component } from "react";
import "./style/cart.css";

class Cart extends Component {
  state = {
    isCartOpen: false,
  };
  toggleCart = () => {
    this.setState({ isCartOpen: !this.state.isCartOpen });
  };
  calculateTotalPrice = (total, item) => {
    const itemPrice = item.quantity * item.price;
    return total + itemPrice;
  };

  render() {
    let classes = "fa fa-shopping-cart fa-3x carticon";

    return (
      <div className="cart">
        <div className="iconContainer">
          <i
            className={classes}
            onClick={this.toggleCart}
            style={{ cursor: "pointer" }}
          ></i>
        </div>
        <div className="badge">{this.props.cartItems.length}</div>

        {this.state.isCartOpen ? (
          <div className="cartItemsContainer">
            <div
              onClick={() => this.setState({ isCartOpen: false })}
              className="closeButton"
            >
              X
            </div>
            {this.props.cartItems.map((item) => (
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
            ))}

            <div>
              <span>total price {"  "} </span>
              <span>
                {this.props.cartItems.reduce(this.calculateTotalPrice, 0)}
              </span>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
Cart.defaultProps = {
  cartItems: [],
};

export default Cart;
