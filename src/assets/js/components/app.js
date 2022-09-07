import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DroneProcess from './DroneProcess.js';
import DroneSpecs from './DroneSpecs.js';
import DroneVideo from './DroneVideo.js';
import DroneStats from './DroneStats.js';
import Header from './Header.js';
import LandingTitle from './LandingTitle.js';
import DronePrice from './DronePrice.js';
import DroneReviews from './DroneReviews.js';
import DroneSubscribe from './DroneSubscribe.js';
import DroneFooter from './DroneFooter.js';
import MobileHeader from './MobileHeader.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	render() {
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
}

ReactDOM.render(<App />, document.getElementById('app'));
