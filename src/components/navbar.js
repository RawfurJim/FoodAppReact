import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./style/navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    const { customer } = this.props;
    return (
      <div className="b">
        <nav className="navbar navbar-expand-lg ">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/order">
                  Order
                </NavLink>
              </li>

              {!customer && (
                <React.Fragment>
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/ragister">
                      Register
                    </NavLink>
                  </li>
                </React.Fragment>
              )}
              {customer && (
                <React.Fragment>
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/profile">
                      {customer.name}
                    </NavLink>
                  </li>
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/logout">
                      Logout
                    </NavLink>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
