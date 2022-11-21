<<<<<<< HEAD
import React from "react";
import { useState } from "react";
const MobileHeader = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__container">
        <div className="mobile-menu__in">
          <div className="mobile-menu__logo">
            <a>
              <img src="/img/logo-1.png" alt="prone drones mobile logo" />
            </a>
          </div>
          <div className="trigger" onClick={() => setToggle(!toggle)}>
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown" style={{ display: toggle ? "block" : "none" }}>
        <div className="dropdown_inner">
          <ul className="anchor_nav">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Product</a>
            </li>
            <li>
              <a href="/">Video</a>
            </li>
            <li>
              <a href="/">Reviews</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
=======
import React from 'react';
import { useState } from 'react';
const MobileHeader = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<div className="mobile-menu">
			<div className="mobile-menu__container">
				<div className="mobile-menu__in">
					<div className="mobile-menu__logo">
						<a>
							<img src="/img/logo-1.png" alt="" />
						</a>
					</div>
					<div className="trigger" onClick={() => setToggle(!toggle)}>
						<div
							className={`hamburger hamburger--slider ${
								toggle ? 'is-active' : ''
							}`}
						>
							<div className="hamburger-box">
								<div className="hamburger-inner"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="dropdown" style={{ display: toggle ? 'block' : 'none' }}>
				<div className="dropdown_inner">
					<ul className="anchor_nav">
						<li>
							<a href="">Home</a>
						</li>
						<li>
							<a href="">Features</a>
						</li>
						<li>
							<a href="">Product</a>
						</li>
						<li>
							<a href="">Video</a>
						</li>
						<li>
							<a href="">Reviews</a>
						</li>
						<li>
							<a href="">Blog</a>
						</li>
						<li>
							<a href="">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
>>>>>>> 5af63291d3728c56faef04094271aafb6cd819f1
};

export default MobileHeader;
