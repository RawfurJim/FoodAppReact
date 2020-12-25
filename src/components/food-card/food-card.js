import React from 'react'
import { useCart } from '../../hooks/use-cart'
import './food-card.css'

const FoodCard = ({ food }) => {
	const { addToCart } = useCart()
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
