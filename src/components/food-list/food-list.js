import React, { Component } from "react";
import { getFood } from "../../services/foodServices";
import FoodCard from "../food-card";
import Loading from "../loading";
import "./food-list.css";

class FoodList extends Component {
  state = {
    foods: [],
    isFetchingFoods: false
  };
  async componentDidMount() {
    this.setState({ isFetchingFoods: true })
    const { data } = await getFood();
    this.setState({ foods: data, isFetchingFoods: false });
  }

  render() {
    const { isFetchingFoods, foods } = this.state
    if (isFetchingFoods) {
      return <Loading text='Foods'/>
    }
    if (!isFetchingFoods && foods.length === 0) {
      return (
        <div className='food-list'>
          <p>No Foods</p>
        </div>
      )
    }
    return (
      <div className='food-list'>
        {
          this.state.foods.map((food) => (
            <FoodCard
              key={food._id}
              food={food}
            />
          ))
        }
      </div>
    );
  }
}

export default FoodList;
