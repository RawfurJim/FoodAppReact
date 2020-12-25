import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Navbar from "../components/navbar";
import HomePage from "../pages/home";
import RegisterPage from "../pages/register";
import LoginPage from "../pages/login";
import LogoutPage from "../pages/logout";
import AdminPage from "../pages/admin";
import Checkout from "../pages/checkout";
import OrdersPage from "../pages/orders";

class App extends Component {
  state = {
    customer: null
  };

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const customer = jwtDecode(jwt);
      this.setState({ customer });
    } catch(e){
      console.error(e)
    }
  }

  render() {
    const { customer } = this.state;
    const { pathname } = this.props.location
    return (
      <div className="app">
        <Navbar
          pathname={pathname}
          customer={this.state.customer}
        />
        <Switch>
          <Route
            path="/checkout"
            render={(props) => {
              if (!customer) return <Redirect to="/login" />
              return <Checkout {...props} />
            }}
          />
          <Route path="/logout" component={LogoutPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/ragister" component={RegisterPage} />
          <Route path="/orders" component={OrdersPage} />
          <Route path="/home" component={HomePage} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
