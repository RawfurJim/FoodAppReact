import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


const getNavItems = (authUser) => {
  const navItems = [
    {
      title: 'Home',
      path: "/home",
    },
    {
      title: 'Orders',
      path: "/orders",
      isHidden: !authUser
    },
    {
      title: 'Login',
      path: "/login",
      isHidden: authUser
    },
    {
      title: 'Register',
      path: "/ragister",
      isHidden: authUser
    },
    {
      title: authUser && authUser.name,
      path: "/profile",
      isHidden: !authUser
    },
    {
      title: 'Logout',
      path: "/logout",
      isHidden: !authUser
    },
  ]
  return navItems.filter(item=> !item.isHidden)
}

class Navbar extends Component {
  state = {};
  render() {
    const { customer, pathname } = this.props;
    return (
      <nav className="navbar">
        <ul className="nav-items">
          {
            getNavItems(customer).map(item => (
              <li className="nav-item" key={item.title}>
                <Link
                  className={`nav-link ${item.path === pathname ? 'active': ''}`}
                  to={item.path}
                >
                  {item.title}
                </Link>
              </li>
            ))
          }
          <li className="cart-icon">
            <i
              className='fa fa-shopping-cart fa-3x carticon'
              onClick={()=>{}}
            ></i>
            <div className="badge">
              <p>{3}</p>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
