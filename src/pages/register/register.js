import React, { Component } from "react";
import Joi from "joi-browser";
import { saveCustomer } from "../../services/customerServices";
import "./register.css";

class Ragister extends Component {
  state = {
    account: { name: "", email: "", mobile: "", password: "" },
    error: {},
  };
  schema = {
    name: Joi.string().min(3).required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
    password: Joi.string().min(5).required(),
    mobile: Joi.string().min(3).required(),
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
    const error = this.validate();

    this.setState({ error: error || {} });
    if (error) {
      return;
    }
    this.doSubmit();
  };
  doSubmit = async () => {
    try {
      const response = await saveCustomer(this.state.account);
      localStorage.setItem("token", response.headers["customer-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const error = { ...this.state.error };
        error.email = ex.response.data;
        this.setState({ error });
      }
    }
    window.location = "/";
  };
  handleChange = (e) => {
    let account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  render() {
    const { account, error } = this.state;
    return (
        <div className="register-page">
          <form className='register-form' onSubmit={this.handleSubmit}>
            <h1>Register New Account</h1>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="name"
                value={account.name}
                name="name"
                placeholder="Enter your name"
                className="form-control"
                onChange={this.handleChange}
              />
              {error.name && (
                <div className="alert alert-danger">{error.name}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={account.email}
                placeholder='Enter email'
                name="email"
                className="form-control"
                onChange={this.handleChange}
              />
              {error.email && (
                <div className="alert alert-danger">{error.email}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile No</label>
              <input
                type="mobile"
                value={account.mobile}
                name="mobile"
                placeholder='e.g +8801632659877'
                className="form-control"
                onChange={this.handleChange}
              />
              {error.mobile && (
                <div className="alert alert-danger">{error.mobile}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={account.password}
                name="password"
                placeholder='Enter password'
                className="form-control"
                onChange={this.handleChange}
              />
              {error.password && (
                <div className="alert alert-danger">{error.password}</div>
              )}
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
    );
  }
}

export default Ragister;
