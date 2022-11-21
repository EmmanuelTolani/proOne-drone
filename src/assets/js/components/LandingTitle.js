<<<<<<< HEAD
import React from "react";

const LandingTitle = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__title">
          <h1>
            The Ultraportable Drone<br></br> for all your needs!
          </h1>
        </div>
        <div className="landing__img">
          <img
            src="https://images.prismic.io/axon-2/3439b911643c03e467e8b1ee46a895357946a68a_drone_v02.png?auto=compress,format"
            alt="Large proOne drone image"
          />
        </div>
      </div>
    </div>
  );
=======
import React, { Component, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin);

const LandingTitle = () => {
	return (
		<div className="landing">
			<div className="landing__container">
				<div className="landing__title">
					<h1>
						The Ultraportable Drone<br></br> for all your needs!
					</h1>
				</div>
				<div className="landing__img">
					<img
						src="https://images.prismic.io/axon-2/3439b911643c03e467e8b1ee46a895357946a68a_drone_v02.png?auto=compress,format"
						alt="Large drone image"
					/>
				</div>
			</div>
		</div>
	);
>>>>>>> 5af63291d3728c56faef04094271aafb6cd819f1
};

export default LandingTitle;
