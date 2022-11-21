import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(ScrollTrigger);
const DroneSpecs = () => {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();
  useEffect(() => {
    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: q(".drone-specs__container"),
          start: "top top+=350",
          ease: "power1",
          scub: 1,
          toggleActions: "play pause none none",
        },
      })
      .from(q(".drone-specs__title"), {
        y: -200,
        opacity: 0,
        duration: 0.8,
      })
      .from(
        q(".drone-specs__img"),
        {
          x: 400,
          opacity: 0,
          duration: 0.8,
        },
        ">-0.5"
      )
      .from(q(".one"), {
        y: -200,
        opacity: 0,
        duration: 0.6,
      })
      .from(q(".three"), {
        y: 200,
        opacity: 0,
        duration: 0.6,
      })
      .from(q(".four"), {
        y: 200,
        opacity: 0,
        duration: 0.6,
      })
      .from(q(".two"), {
        y: -200,
        opacity: 0,
        duration: 0.6,
      });
    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div className="drone-specs" ref={el}>
      <div className="drone-specs__container">
        <div className="drone-specs__left">
          <div className="drone-specs__title">
            <h2 className="drone-specs__overview">Overview of ProOne Drone</h2>
            <p className="drone-specs__name">
              The ProOne Drone is made with 100% titanium, and the highest
              quality materials. Have a look at the newest features!
            </p>
          </div>
          <div className="drone-specs__all">
            <div className="drone-specs__all-specs">
              <div className="spec one">
                <img src="img/feature-2-1.png" alt="drone flight time" />
                <div className="spec-text">
                  <h3>Flight time</h3>
                  <h4>60 min</h4>
                </div>
              </div>
              <div className="spec two">
                <img
                  src="img/feature-2-3.png"
                  alt="drone transmission distance"
                />
                <div className="spec-text">
                  <h3>Transmission Distance</h3>
                  <h4>2 km</h4>
                </div>
              </div>
            </div>
            <div className="drone-specs__all-specs">
              <div className="spec three">
                <img src="img/feature-2-2.png" alt="drone vps range" />
                <div className="spec-text">
                  <h3>VPS range</h3>
                  <h4>189 m</h4>
                </div>
              </div>
              <div className="spec four">
                <img src="img/feature-2-4.png" alt="drone effective pixels" />
                <div className="spec-text">
                  <h3>Effective Pixels</h3>
                  <h4>32 mp</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drone-specs__img">
          <img
            src="https://images.pexels.com/photos/1623016/pexels-photo-1623016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="girls flying drone"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default DroneSpecs;
