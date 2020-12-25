import React, { createContext, useContext } from 'react'
import { useLocalstorageState } from '../use-localstorage-state'

const CartContext = createContext()
CartContext.displayName = 'CartContext'

export const CartProvider = (props) => {
	const defaultCartItems = JSON.stringify({})
	const [cartItems, setCartItems] = useLocalstorageState('food-cart', defaultCartItems)
	const addToCart = (item) => {
		let updatedCart = JSON.parse(cartItems);
		if (updatedCart[item._id]) {
		  updatedCart[item._id].quantity = updatedCart[item._id].quantity + 1;
		} else {
		  updatedCart[item._id] = { ...item, quantity: 1 };
		}
		setCartItems(JSON.stringify(updatedCart))
	}
	const getCart = () => {
		return Object.values(JSON.parse(cartItems))
	}
	const clearCart = () => {
		setCartItems(defaultCartItems)
	}
	const calculateTotalPrice = (total, item) => {
		const itemPrice = item.quantity * item.price;
		return total + itemPrice;
	};
	const totalPrice = getCart().reduce(calculateTotalPrice, 0)
	
	const value = {
		cart: getCart(),
		totalPrice,
		addToCart,
		clearCart
	}

	return <CartContext.Provider value={value} {...props} />
}


export const useCart = () => {
	const context = useContext(CartContext)
	if (context === undefined) {
		throw new Error('useCart must be used within a CartProvider')
	}
	const { cart, totalPrice, addToCart, clearCart} = context
	return {
		cartItems: cart,
		totalPrice,
		addToCart,
		clearCart
	}
}