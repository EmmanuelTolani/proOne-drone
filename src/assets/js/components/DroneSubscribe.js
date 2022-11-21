import { gsap } from "gsap";
import React, { useRef, useEffect } from "react";
import { CSSPlugin } from "gsap/CSSPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin);

const DroneSubscribe = () => {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();
  useEffect(() => {
    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: q(".drone-subscribe__container"),
          start: "top top+=400",
          ease: "power1",
          scub: 1,
          toggleActions: "play pause none none",
        },
      })
      .from(q(".drone-subscribe__text"), {
        y: -200,
        opacity: 0,
        duration: 0.8,
      })
      .from(q(".drone-subscribe__img"), {
        x: 400,
        opacity: 0,
        duration: 0.8,
      })
      .from(q(".one"), {
        x: -200,
        opacity: 0,
        duration: 0.8,
      })
      .from(q(".three"), {
        x: 200,
        opacity: 0,
        duration: 0.8,
      })
      .from(q(".four"), {
        y: 200,
        opacity: 0,
        duration: 0.8,
      })
      .from(q(".two"), {
        y: -200,
        opacity: 0,
        duration: 0.8,
      });
  }, []);
  return (
    <div className="drone-subscribe" ref={el}>
      <div className="drone-subscribe__container">
        <div className="drone-subscribe__text">
          <h2>Subscribe For The Latest Update And New Offers</h2>
          <p>
            Join our newsletter. Get notified on the latest updates and offers!
          </p>
          <div className="drone-subscribe__subscribe">
            <input type="email" placeholder="Email Address" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="drone-subscribe__img">
          <img
            src="https://images.pexels.com/photos/3226321/pexels-photo-3226321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="prone drone flying over road"
          />
        </div>
      </div>
    </div>
  );
};

export default DroneSubscribe;
