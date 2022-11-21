import React, { Component } from "react";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin);

export default class DronePrice extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe",
      prices: [
        {
          price: "247",
          title: "Standard Edition",
          imgUrl:
            "https://droneharmony.com/wp-content/uploads/2020/11/mavic_mini.png",
          description: `GPS-backed navigation system
                    Up to 30 minutes flight time
                    16 M pixel built-in camera
                    Durable Lithium-ion polymer`,
        },
        {
          price: "347",
          title: "Premium Edition",
          imgUrl:
            "https://dronedj.com/wp-content/uploads/sites/2/2021/03/Drone-5-e1614699294835.png?w=1000",
          description: `GPS-backed navigation system 
                    Up to 60 minutes flight time 
                    16 M pixel built-in camera 
                    Durable Lithium-ion polymer `,
        },
        {
          price: "647",
          title: "Limited Edition",
          imgUrl:
            "https://droneservicescanadainc.com/wp-content/uploads/2021/01/Matrice300RTK-768x512.png",
          description: `GPS-backed navigation system
                    Up to 90 minutes flight time
                    32 M pixel built-in camera
                    Durable Lithium-ion polymer`,
        },
      ],
    };
  }

  showAllPrices = () => {
    const dronePrices = this.state.prices; // sets the variable dronePrices to the array of prices
    var i; //declare the variable i that will be used to iterate through the dronePrices
    for (i = 0; i < dronePrices.length; i++) {
      // for loop to iterate through all objects in the dronePrices variable
      return dronePrices.map((price, index) => {
        return (
          <div
            className={`drone-price__single-price ${"a" + index}`}
            key={index}
          >
            <div className="drone-price__single-title">
              <h2>{price.title}</h2>
            </div>
            <div className="drone-price__single-img">
              <img src={price.imgUrl} alt="prone drone product" />
            </div>
            <div className="drone-price__price">
              <h1>${price.price}</h1>
              <p>{price.description}</p>
            </div>
            <div className="drone-price__btn">
              <a href="/">
                <i className="fas fa-shopping-cart"></i>
                Description
              </a>
            </div>
          </div>
        );
      });
    }
  };

  render() {
    return (
      <div className="drone-price">
        <div className="drone-price__container">
          <div className="drone-price__title">
            <h2>Quadron Price</h2>
            <p>
              We have three different models. Have a look at are quadron prices.
            </p>
          </div>
          <div className="drone-price__offers">{this.showAllPrices()}</div>
        </div>
      </div>
    );
  }
}
