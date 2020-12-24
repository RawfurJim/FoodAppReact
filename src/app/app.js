import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Navbar from "../components/navbar";
import Home from "../pages/home";
import Food from "../pages/food";
import Register from "../pages/register";
import Login from "../pages/login";
import Logout from "../pages/logout";
import Admin from "../pages/admin";
import Checkout from "../pages/checkout";

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
    return (
      <div className="App">
        <Navbar customer={this.state.customer} />
        <Switch>
          <Route
            path="/checkout"
            render={(props) => {
              if (!customer) return <Redirect to="/login" />
              return <Checkout {...props} />
            }}
          />
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/ragister" component={Register} />
          <Route path="/order" component={Food} />
          <Route path="/home" component={Home} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    );
  }
}
export default App;
