import React, { Component } from "react";
import Joi from "joi-browser";
import { loginCustomer } from "../../services/loginCustomerServices";
import './login.css'

class Login extends Component {
  state = {
    account: { email: "", password: "" },
    error: {},
  };
  schema = {
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
    password: Joi.string().required(),
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
      const { data: jwt } = await loginCustomer(this.state.account);
      localStorage.setItem("token", jwt);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const error = { ...this.state.error };
        error.email = ex.response.data;
        error.password = ex.response.data;
        this.setState({ error });
      }
    }
  };
  handleChange = (e) => {
    let account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  render() {
    const { account, error } = this.state;
    return (
      <div className='login-page'>
        <form className='login-form' onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={account.email}
              name="email"
              placeholder='Enter email'
              className="form-control"
              onChange={this.handleChange}
            />
            {error.email && (
              <div className="error-message">{error.email}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={account.password}
              name="password"
              className="form-control"
              placeholder='Enter password'
              onChange={this.handleChange}
            />
            {error.password && (
              <div className="error-message">{error.password}</div>
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

export default Login;
