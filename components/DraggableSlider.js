import { useState, useEffect, useRef, createRef } from 'react';
import Image from 'next/image';

const DraggableSlider = ({ imageCollection }) => {
  const [isActiveElement, setIsActiveElement] = useState(false);
  const slider = useRef(null);

  const elementsRef = useRef(imageCollection.map(() => createRef()));

  let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationId = 0,
    currentIndex = 0;

  useEffect(() => {
    if (slider && elementsRef) {
      elementsRef.current.forEach((item, index) => {
        if (item.current.nodeName == 'DIV') {
          // Touch events
          item.current.addEventListener('touchstart', touchStart(index));
          item.current.addEventListener('touchend', touchEnd);
          item.current.addEventListener('touchmove', touchMove);
          // Mouse events
          item.current.addEventListener('mousedown', touchStart(index));
          item.current.addEventListener('mouseup', touchEnd);
          item.current.addEventListener('mouseleave', touchEnd);
          item.current.addEventListener('mousemove', touchMove);
        }
      });
    }

    return () => {
      if (slider && elementsRef) {
        elementsRef.current.forEach((item, index) => {
          if (item.current.nodeName == 'DIV') {
            // Touch events
            item.current.removeEventListener('touchstart', touchStart(index));
            item.current.removeEventListener('touchend', touchEnd);
            item.current.removeEventListener('touchmove', touchMove);
            // Mouse events
            item.current.removeEventListener('mousedown', touchStart(index));
            item.current.removeEventListener('mouseup', touchEnd);
            item.current.removeEventListener('mouseleave', touchEnd);
            item.current.removeEventListener('mousemove', touchMove);
          }
        });
      }
    };
  });

  function touchStart(index) {
    return function (e) {
      currentIndex = index;
      isDragging = true;
      startPos = getPositionX(e);
      setIsActiveElement(true);
      if (window !== 'undefined') {
        animationId: window.requestAnimationFrame(animation);
      }

      console.log(
        'start event ||',
        'currentIdx:',
        currentIndex,
        'isDragging:',
        isDragging,
        'position:',
        startPos,
        'animation id start:',
        animationId
      );
    };
  }

  function touchEnd() {
    isDragging = false;

    if (window !== 'undefined') {
      window.cancelAnimationFrame(animationId);
    }
    setIsActiveElement(false);

    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100 && currentIndex < imageCollection.length - 1) {
      currentIndex += 1;
    }

    if (movedBy > 100 && currentIndex > 0) {
      currentIndex -= 1;
    }

    setPositionByIndex();

    console.log(
      'end event:',
      'movedBy:',
      movedBy,
      'isDragging:',
      isDragging,
      'position:',
      startPos,
      'anim id:',
      animationId,
      'currentTranslate:',
      currentTranslate
    );
  }

  function touchMove(e) {
    if (isDragging) {
      const currentPosition = getPositionX(e);
      currentTranslate = prevTranslate + currentPosition - startPos;
      console.log(
        'moving:',
        'currentPosition:',
        currentPosition,
        'currentTranslate:',
        currentTranslate
      );
    }
  }

  //   if event if fired by mouse, get that starting point from property that detects where a mouse has clicked
  // or if it's fired by touch, get the touch point
  const getPositionX = (e) => {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  };

  const setSliderPosition = () => {
    if (slider) {
      slider.current.style.transform = `translateX(${currentTranslate}px)`;
    }
  };

  const animation = () => {
    setSliderPosition();
    if (isDragging && window !== 'undefined') {
      window.requestAnimationFrame(animation);
    }
  };

  const setPositionByIndex = () => {
    if (window !== 'undefined') {
      console.log(window.innerWidth, 'window innerWidth');
      currentTranslate = currentIndex * -window.innerWidth;
      console.log(currentTranslate, 'crtTranslate');
      prevTranslate = currentTranslate;
      setSliderPosition();
    }
  };

  //   if (typeof window !== 'undefined') {
  //     // preventing elements dragging around as a small blurry picture
  //     window.addEventListener('dragstart', (e) => e.preventDefault());
  //     //    prevents opening of a right click menu
  //     window.oncontextmenu = function (e) {
  //       e.preventDefault();
  //       e.stopPropagation();
  //       return false;
  //     };
  //   }

  return (
    <div
      className={
        isActiveElement ? 'change-cursor draggable-slider' : 'draggable-slider'
      }
      ref={slider}
    >
      {imageCollection.map((item, index) => {
        return (
          <div
            ref={elementsRef.current[index]}
            className="draggable-slider__slide"
          >
            <img src={item.path} />
            {/* <Image src={item.path} width={800} height={650} /> */}
          </div>
        );
      })}

      <style jsx>{`
        .draggable-slider {
          height: 100vh;
          /* width: 100%; */
          display: inline-flex;
          overflow: hidden;
          transform: translateX(0);
          transition: transform 0.3s ease-out;
          cursor: pointer;
        }
        .draggable-slider__slide {
          max-height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
          place-items: center;
          padding: 1rem;
          user-agent: none;
          transition: transform 0.3s ease-in-out;
        }

        /* additional styles when using regular image and not nextjs Image component */
        .draggable-slider img {
          max-width: 100%;
          max-height: 60%;
        }

        .change-cursor {
          cursor: grabbing;
        }
      `}</style>
    </div>
  );
};

export default DraggableSlider;
