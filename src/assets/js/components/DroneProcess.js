import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin);

const DroneProcess = () => {
  const el = useRef(null);
  const q = gsap.utils.selector(el);
  const tl = useRef();
  useEffect(() => {
    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: q(".drone-process__container"),
          start: "top top+=400",
          ease: "power1",
          scub: 1,
          toggleActions: "play pause none none",
        },
      })
      .from(q(".drone-process__title"), {
        y: -200,
        opacity: 0,
        duration: 0.8,
      })
      .from(
        q(".drone-process__img"),
        {
          y: 400,
          opacity: 0,
          duration: 0.8,
        },
        ">-0.5"
      )
      .from(q(".process-left"), {
        x: -200,
        opacity: 0,
        duration: 0.6,
      })
      .from(q(".process-right"), {
        x: 200,
        opacity: 0,
        duration: 0.6,
      });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div className="drone-process" ref={el}>
      <div className="drone-process__title">
        <h2>Why our Drones ?</h2>
        <p>
          Have a look at all the features that seperate us from the all the
          rest!
        </p>
      </div>
      <div className="drone-process__container">
        <div className="drone-process__main-content">
          <div className="drone-process__left">
            <div className="process-left ">
              <div className="processImg-container">
                {" "}
                <img src="/img/feature-1.png" alt="thumbs up" />
              </div>

              <h3>High Quality</h3>
              <p>
                All our drone materials are 100% authentic and fully handcrafted
                with superior attention to detail.
              </p>
            </div>
            <div className="process-left ">
              <div className="processImg-container">
                <img src="/img/feature-2.png" alt="attention to detail" />
              </div>

              <h3>Awesome Design</h3>
              <p>
                Our Drones are geniusly designed which allows you to travel
                twice as long as other drone manifactures.
              </p>
            </div>
          </div>
          <div className="drone-process__img">
            <img
              src="https://images.pexels.com/photos/3945676/pexels-photo-3945676.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="white proOne drone"
            />
            <div className="button-container">
              <div className="button">
                <a href="/">
                  <i className="fas fa-shopping-cart"></i> Order Now
                </a>
              </div>
            </div>
          </div>
          <div className="drone-process__right">
            <div className="process-right ">
              <div className="processImg-container">
                <img src="/img/feature-3.png" alt="Latest technology" />
              </div>

              <h3>Latest Technology</h3>
              <p>
                All new transmission system allows you to control your drone
                from 2km away!
              </p>
            </div>
            <div className="process-right ">
              <div className="processImg-container">
                <img src="/img/feature-4-1.png" alt="user Friendly" />
              </div>

              <h3>User Friendly</h3>
              <p>
                Easy to use call back system. Automatically brings your drone
                back to you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroneProcess;
