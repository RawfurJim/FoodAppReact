import React, { Component } from "react";
import { getFood } from "../services/foodServices";
import "./style/food.css";
import Cart from "./cart.js";

class Food extends Component {
  state = {
    foods: [],
    cart: {},
  };
  async componentDidMount() {
    const { data } = await getFood();

    this.setState({ foods: data });
  }

  addToCart = (food) => {
    let updatedCart = { ...this.state.cart };
    if (updatedCart[food._id]) {
      updatedCart[food._id].quantity = updatedCart[food._id].quantity + 1;
    } else {
      updatedCart[food._id] = { ...food, quantity: 1 };
    }
    this.setState({
      cart: { ...updatedCart },
    });
    localStorage.setItem("foodCart", JSON.stringify(updatedCart));
  };
  render() {
    let cartItems = Object.values(this.state.cart);

    return (
      <div>
        <Cart cartItems={cartItems} />

        <div className="row">
          {this.state.foods.map((food) => (
            <div className="card col-3 " key={food._id}>
              <img src={food.productImage} alt="Logo" />
              <div className="card-body v">
                <h5>{food.name}</h5>
                <p>{food.price}</p>
                <button
                  onClick={() => this.addToCart(food)}
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
