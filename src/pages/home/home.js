import React, { Component } from "react";
import FoodList from "../../components/food-list";
import "./home.css";

class Home extends Component {

  render() {
    return (
      <div className="home-page">
        <section className='hero-section'>
          <h3 className='hero-title'>Welcome To Good Foods</h3>
        </section>
        <section className='foods-section'>
          <div className="foods-list-container">
            <h3 className="section-title">Featured Foods</h3>
            <FoodList/>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
