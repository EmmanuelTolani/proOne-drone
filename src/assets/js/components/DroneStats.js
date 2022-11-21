<<<<<<< HEAD
import React from "react";
=======
import React, { Component } from "react";
import ReactDOM from "react-dom";
>>>>>>> 5af63291d3728c56faef04094271aafb6cd819f1
import CountUp from "react-countup";

const DroneStats = () => {
  return (
    <div className="drone-stats">
      <div className="drone-stats__container">
        <div className="drone-stats__text">
          <div className="drone-stats__title">
            <h1>Quadron Progress</h1>
            <p>
              Delay rapid joy share allow age manor six. Went why far saw many
              knew.<br></br>Exquisite excellent son gentleman acuteness her.
            </p>
          </div>
          <div className="drone-stats__main-content">
            <ul className="drone-stats__stats">
              <li className="one">
                <CountUp
                  className="counter"
                  redraw={true}
                  start={0}
                  end={630}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
                <h2>Satisfied</h2>
                <p>Customers satisfied all over the world!</p>
              </li>
              <li className="two">
                <CountUp
                  className="counter"
                  redraw={true}
                  start={0}
                  end={254}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
                <h2>Countries</h2>
                <p>Countries all over the world</p>
              </li>
              <li className="three">
                <CountUp
                  className="counter"
                  redraw={true}
                  start={0}
                  end={547}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
                <h2>24/7 Support</h2>
                <p>24/7 support tech</p>
              </li>
              <li className="four">
                <CountUp
                  className="counter"
                  redraw={true}
                  start={0}
                  end={387}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
                <h2>Quadron Miles</h2>
                <p>Total miles travelled by quadron owners</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroneStats;
