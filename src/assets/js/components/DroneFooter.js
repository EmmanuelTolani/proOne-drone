import React, { Component } from "react";

export default class DroneFooter extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe",
    };
  }

  render() {
    return (
      <footer>
        <div id="DroneFooter">
          <div className="container">
            <div className="DroneFooter-container">
              <div className="DroneFooter-nav">
                <div className="footer-logo">
                  <img
                    src="/img/footer-logo.png"
                    alt="proone drone footer logo"
                  />
                </div>
                <div className="footer-nav">
                  <ul>
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
                      <a href="/">Review</a>
                    </li>
                    <li>
                      <a href="/">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="DroneFooter-icon_box">
                <ul>
                  <li>
                    <a href="/www.facebook.com">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/www.twitter.com">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/www.instagram.com">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/www.googleplus.com">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/www.linkedin.com">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
