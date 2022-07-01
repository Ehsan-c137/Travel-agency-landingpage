"use strict";

const flightPath = {
   curviness: 1.3,
   autoRotate: true,
   values: [
      { x: -20, y: 100 },
      { x: 10, y: 300 },
      { x: 20, y: 500 },
      { x: -20, y: 650 },
      { x: -10, y: 550 },
      { x: 30, y: 700 },
      { x: 30, y: 700 },
      { x: 30, y: 700 },
      { x: 35, y: 800 },
      { x: 20, y: 900 },
      { x: 25, y: 1000 },
      { x: 30, y: 1100 },
      { x: 30, y: 1100 },
      { x: 30, y: 1100 },
      { x: 23, y: 1200 },
      { x: 35, y: 1400 },
      { x: 25, y: 1500 },
      { x: 37, y: 1600 },
      { x: 47, y: 1700 },
      { x: 31, y: 1800 },
      { x: 70, y: 1900 },
      { x: 80, y: 2000 },
      { x: 130, y: 2000 },
   ],
};

const tween = new TimelineLite();

tween.add(
   TweenLite.to(".paper-plane", 1, {
      bezier: flightPath,
      ease: Power1.easeInOut,
      triggerHook: 1,
   })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
   triggerElement: ".paper-plane-animation",
   duration: 1450,
})
   .setTween(tween)
   .addTo(controller);
