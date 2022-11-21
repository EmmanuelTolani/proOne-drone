import React from "react";
import DroneProcess from "./assets/js/components/DroneProcess";
import DroneSpecs from "./assets/js/components/DroneSpecs.js";
import DroneVideo from "./assets/js/components/DroneVideo.js";
import DroneStats from "./assets/js/components/DroneStats.js";
import Header from "./assets/js/components/Header.js";
import LandingTitle from "./assets/js/components/LandingTitle.js";
import DronePrice from "./assets/js/components/DronePrice.js";
import DroneReviews from "./assets/js/components/DroneReviews.js";
import DroneSubscribe from "./assets/js/components/DroneSubscribe.js";
import DroneFooter from "./assets/js/components/DroneFooter.js";
import MobileHeader from "./assets/js/components/MobileHeader.js";

function App() {
  return (
    <div id="app">
      {/* Start of the Top section of the page that is wrapped with the top background (includes the header and the landing title) */}
      <div className="top-section">
        <Header />
        <MobileHeader />
        <LandingTitle />
      </div>
      {/* End of the Top section of the page that is wrapped with the top background (includes the header and the landing title) */}
      {/* Start of the Drone Specifications section */}
      <DroneSpecs />
      {/* End of the Drone Specifications section */}
      {/* Start of the Drone Process section */}
      <DroneProcess />
      {/* End of the Drone Specifications section */}
      {/* Start of the Drone Video section */}
      <DroneVideo />
      {/* End of the Drone Specifications section */}
      {/* Start of the Drone Statistics section */}
      <DroneStats />
      {/* End of the Drone Statistics section */}
      {/* Start of the Drone Pricing section */}
      <DronePrice />
      {/* End of the Drone Pricing section */}
      {/* Start of the Drone Review section */}
      <DroneReviews />
      {/* End of the Drone Review section */}
      {/* Start of the Drone newsletter subscribe section */}
      <DroneSubscribe />
      {/* End of the Drone newsletter subscribe section */}
      {/* Start of the Drone Footer and copyright section */}
      <DroneFooter />
      {/* End of the Drone Footer and copyright section */}
      <div id="copyright-section">
        <div className="copyright-text">
          <p>© 2021 ProOne. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
export default App;
