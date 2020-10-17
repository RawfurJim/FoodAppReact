import React, { Component } from "react";
import { getFoods } from "../services/fakefoodSevices";
import "./style/food.css";
import Cart from "./cart.js"

class Food extends Component {
  state = {
    foods: getFoods(),
    cart: {},
  };
  handleSubmit = (food) => {
    if (this.state.cart[food._id]) {
      const updatedfood = this.state.cart[food._id];
      updatedfood.quantity = updatedfood.quantity + 1;
      this.setState({
        cart: {
          ...this.state.cart,
          [food._id]: { ...updatedfood },
        },
      });
    } else {
      this.setState({
        cart: {
          ...this.state.cart,
          [food._id]: {
            ...food,
            quantity: 1,
          },
        },
      });
    }
  };
  render() {
    let cartItems = Object.values(this.state.cart);
     
    return (
      <div>
        
      <Cart 
      
        cartItems={cartItems}
      />
    
      <div className="row">
       
        {this.state.foods.map((food) => (
          <div className="card col-3 " key={food._id}>
            <img src={food.productImage} alt="Logo" />
            <div className="card-body v">
              <h5>{food.name}</h5>
              <p>{food.price}</p>
              <button
                onClick={() => this.handleSubmit(food)}
                className="btn btn-danger "
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
    );
  }
}

export default Food;
