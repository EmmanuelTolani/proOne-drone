<<<<<<< HEAD
import React, { useRef, useEffect } from "react";
=======
import React, { Component, useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
>>>>>>> 5af63291d3728c56faef04094271aafb6cd819f1
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin);

const DroneVideo = () => {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();
  useEffect(() => {
    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: q(".drone-video__container"),
          start: "top top+=400",
          ease: "power1",
          scub: 1,
          toggleActions: "play pause none none",
        },
      })
      .from(q(".drone-video__title"), {
        x: -200,
        opacity: 0,
        duration: 0.8,
      })
      .from(q(".drone-video__vid-box"), {
        y: 400,
        opacity: 0,
        duration: 0.8,
      });
  }, []);
  return (
    <div className="drone-video" ref={el}>
      <div className="drone-video__container">
        <div className="drone-video__title">
          <h2>
            Look At Our Best Drone <br className="1"></br> Video Camera Shots
          </h2>
          <p>
            The proOne drone shots 4k video with the latest motion stabilizing
            camera, take beautiful videos of all the beauty the world can offer!
          </p>
        </div>
        <div className="drone-video__vid-box">
          <div className="drone-video__video">
            <iframe
              className="responsive-iframe"
              src="https://www.youtube.com/embed/Jqf9haCd6mM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroneVideo;
