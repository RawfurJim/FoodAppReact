import React from 'react'
import './food-card.css'

const FoodCard = ({ food }) => {

	const addToCart = (food) => {
		let updatedCart = { };
		if (updatedCart[food._id]) {
		  updatedCart[food._id].quantity = updatedCart[food._id].quantity + 1;
		} else {
		  updatedCart[food._id] = { ...food, quantity: 1 };
		}
		localStorage.setItem("foodCart", JSON.stringify(updatedCart));
	}

	return (
		<div className="food-card" key={food._id}>
			<img className='food-image' src={food.productImage} alt="food" />
			<div className="food-info">
				<h3>{food.name}</h3>
				<p>{food.price}tk</p>
				<button
					onClick={() => addToCart(food)}
					className="btn"
				>
					Add To Cart
				</button>
			</div>
		</div>
	)
}

export default FoodCard
