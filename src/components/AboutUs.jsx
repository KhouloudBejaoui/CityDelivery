import React from 'react'
import "./style.css"
import aboutus from "../img/aboutus.png";

const AboutUs = () => {
  return (
    <section class="about" id="about">
        
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            About Us
          </p>
    <div class="column">
      <div class="image">
        <img src={aboutus} alt="" />
      </div>

      <div class="content">
        <h3>Instant Delivery</h3>
        <p>
        Every day, CityDelivery delivers food and beverages from restaurants to millions of consumers. With a few taps, you too can have your cravings delivered to your doorstep.
        </p>
        <p>
        No matter where you are, you can order food in your area, delivered straight to your door.
        </p>
      </div>
    </div>
  </section>
  )
}

export default AboutUs
