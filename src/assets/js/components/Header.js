import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src="/img/logo-1.png" alt="prone drones logo" />
        </div>
        <div className="header__menu">
          <ul className="header__navigation">
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
            <li>
              <div className="header__btn">
                <a href="/">
                  <i className="fas fa-shopping-cart"></i>
                  Order Now
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
