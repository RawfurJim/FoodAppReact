import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/use-cart";
import Cart from '../cart'
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

const Navbar = (props) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cartItems } = useCart()

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }
  const closeCart = () => {
    setIsCartOpen(false)
  } 
  const { customer, pathname } = props;

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
            onClick={toggleCart}
          ></i>
          <div className="badge">
            <p>{cartItems.length}</p>
          </div>
          {
            isCartOpen ?
              <div className='cart-container'>
                <Cart
                  cartItems = {cartItems}
                  onClose={closeCart}
                /> 
              </div> : null
          }
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
