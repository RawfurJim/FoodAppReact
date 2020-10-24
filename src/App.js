import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Food from "./components/food";
import Ragister from "./components/ragister";
import Login from "./components/login";
import Logout from "./components/logout";
import Admin from "./components/admin";

class App extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const customer = jwtDecode(jwt);
      this.setState({ customer });
    } catch {}
  }
  render() {
    return (
      <div className="App">
        <Navbar customer={this.state.customer} />
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/ragister" component={Ragister} />
          <Route path="/order" component={Food} />
          <Route path="/home" component={Home} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    );
  }
}
export default App;
