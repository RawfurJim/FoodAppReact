import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Food from "./components/food";
import Ragister from "./components/ragister";
import Login from "./components/login";
import Logout from "./components/logout";
import Admin from "./components/admin";
//Authecation comment

function App() {
  const d = 14;
  return (
    <div className="App">
      <Navbar />
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

export default App;
