import React, { Component } from "react";
import Joi from "joi-browser";
import { saveOrder } from "../../services/orderServices";
import "./checkout.css";

class Checkout extends Component {
  state = {
    account: {
      receivedName: "",
      receivedAddress: "",
      receivedMobileNo: "",
      products: [],
    },
    error: {},
    cartItems: [],
  };
  schema = {
    receivedName: Joi.string().required(),
    receivedAddress: Joi.string().required(),
    receivedMobileNo: Joi.string().required(),
    products: Joi.array().required(),
  };
  validate = () => {
    const { account } = this.state;
    const error = {};
    const result = Joi.validate(account, this.schema, { abortEarly: false });

    if (!result.error) return null;

    for (let item of result.error.details) error[item.path[0]] = item.message;
    return error;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { cartItems } = this.state;

    cartItems.forEach((item) => {
      const _id = item._id;
      const quantity = item.quantity;
      let product = { _id, quantity };
      this.state.account.products.push(product);
    });
    const error = this.validate();
    this.setState({ error: error || {} });
    if (error) {
      return;
    }
    this.doSubmit();
  };
  doSubmit = async () => {
    try {
      await saveOrder(this.state.account);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const error = { ...this.state.error };
        error.email = ex.response.data;
        this.setState({ error });
      }
    }
  };

  componentDidMount() {
    let localCart = JSON.parse(localStorage.getItem("foodCart"));
    console.log(localCart);
    let cartItems = Object.values(localCart);
    this.setState({ cartItems });
  }

  handleChange = (e) => {
    let account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  render() {
    const { account, error } = this.state;
    return (
      <React.Fragment>
        <div className="checkOut_Page">
          <div className="form-div">
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="receivedName">Name</label>
                <input
                  type="receivedName"
                  name="receivedName"
                  value={account.receivedName}
                  className="form-control"
                  onChange={this.handleChange}
                />
                {error.receivedName && (
                  <div className="alert alert-danger">{error.receivedName}</div>
                )}
              </div>
              <div>
                <label htmlFor="receivedAddress">Address</label>
                <input
                  type="receivedAddress"
                  name="receivedAddress"
                  value={account.receivedAddress}
                  className="form-control"
                  onChange={this.handleChange}
                />
                {error.receivedAddress && (
                  <div className="alert alert-danger">
                    {error.receivedAddress}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="receivedMobileNo">MobileNo</label>
                <input
                  type="receivedMobileNo"
                  name="receivedMobileNo"
                  value={account.receivedMobileNo}
                  className="form-control"
                  onChange={this.handleChange}
                />
                {error.receivedMobileNo && (
                  <div className="alert alert-danger">
                    {error.receivedMobileNo}
                  </div>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="item-div">
            <div className="checkout_heading">
              <h3>Checkout Items</h3>
            </div>

            {this.state.cartItems.map((item) => (
              <div key={item._id} className="itemInline item">
                <div className="item_name">
                  <p style={{ width: "40%" }}>{item.name}</p>
                </div>
                <div className="item_image">
                  <img
                    src={item.productImage}
                    alt="Logo"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div className="item_price">
                  <p style={{ margin: "4px" }}>{item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Checkout;
