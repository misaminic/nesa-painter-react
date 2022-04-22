import styled from 'styled-components';
import { useEffect, useRef, createRef } from 'react';

const JustSlider = ({ imageCollection }) => {
  const slider = useRef(null);
  const sliderInner = useRef(null);

  let pressed = false;
  let startx;
  let x;

  useEffect(() => {
    slider.current.addEventListener('mousedown', (e) => {
      pressed = true;
      startx = e.offsetX - sliderInner.current.offsetLeft;
      slider.current.style.cursor = 'grabbing';
      // e.preventDefault();
      console.log(pressed, 'start');
    });

    slider.current.addEventListener('mouseenter', (e) => {
      // console.log('mouse enters');
      // e.path[0].children[0].children[0].style = 'transform: scale(0.9)';
      slider.current.style.cursor = 'grabbing';
    });

    // slider.current.addEventListener('mouseleave', (e) => {
    //   console.log('mouse exits');
    //   e.path[0].children[0].children[0].style = 'transform: scale(1)';
    // });

    slider.current.addEventListener('mouseup', (e) => {
      slider.current.style.cursor = 'grab';
      pressed = false;
      // e.preventDefault();
      console.log(pressed, 'end');
    });

    // slider.current.addEventListener('mouseleave', (e) => {
    //   slider.current.style.cursor = 'grab';
    //   pressed: false;
    //   e.preventDefault();
    // });

    slider.current.addEventListener('mousemove', (e) => {
      // console.log(pressed, 'move');
      if (pressed) {
        e.preventDefault();
        x = e.offsetX;

        sliderInner.current.style.left = `${x - startx}px`;
      }
      // checkBoundary();
    });

    const checkBoundary = () => {
      let outer = slider.current.getBoundingClientRect();
      let inner = sliderInner.current.getBoundingClientRect();

      if (parseInt(sliderInner.current.style.left) > 0) {
        sliderInner.current.style.left = '0px';
      } else if (inner.right < outer.right) {
        sliderInner.current.style.left = `-${inner.width - outer.width}px`;
      }
    };
  });

  return (
    <div ref={slider} className="slider-outer">
      <div className="slider-inner" ref={sliderInner}>
        {imageCollection.map((item, index) => {
          return (
            <div key={index} className="each-slide">
              <img src={item.path} className="front-page-images" />
            </div>
          );
        })}
      </div>
      <style jsx>
        {`
          .slider-outer {
            position: absolute;
            left: 9%;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
          }

          .slider-inner {
            position: absolute;
            top: 0;
            left: 0;
            width: 200%;
            height: 100%;
            display: inline-flex;
            /* grid-template-columns: repeat(3, 1fr); */
            /* gap: 1rem; */
            transition: left 0.3s ease-in-out;
            padding-right: 2rem;
          }

          .each-slide {
            width: 16%;
            display: flex;
            justify-content: center;
            user-agent: none;
            padding: 2rem 2rem;
            margin-left: 1.875rem;
            margin-right: 1.875rem;
            background-color: red;
            transition: all 0.3s ease-in-out;
          }

          .each-slide:first-child {
            margin-left: 0;
          }

          .each-slide:last-child {
            margin-right: 0;
          }

          .each-slide img {
            z-index: 10;
          }

          .slider-outer .slider-inner .each-slide:hover {
            box-shadow: inset 0 0 0 6vw green;
}
          }

        `}
      </style>
    </div>
  );
};

export default JustSlider;
