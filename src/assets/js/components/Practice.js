import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin);

export default class Practice extends Component {
	constructor() {
		super();
	}
	componentDidMount() {
		var tl = gsap.timeline({ repeat: 2, repeatDelay: 1 });
		tl.to('.myBox', { x: 100, duration: 1 });
	}

	render() {
		const Divstyle = {
			background: 'black',
			height: '200px',
			width: '300px',
			color: 'white'
		};
		return (
			<div className="myBox" style={Divstyle}>
				Emmanuel Tolani
			</div>
		);
	}
}
