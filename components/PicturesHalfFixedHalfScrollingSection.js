import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const PicturesHalfFixedHalfScrollingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isImgOneVisible, setIsImgOneVisible] = useState(false);
  const [isImgTwoVisible, setIsImgTwoVisible] = useState(false);

  const observersCallback = (entries) => {
    entries.forEach((entry) => {
      console.log(
        entry.target.classList.contains('image-section-1'),
        'ovo je sad'
      );
      if (
        entry.target.classList.contains('image-section-1') &&
        entry.isIntersecting
      ) {
        setIsImgOneVisible(true);
      } else {
        setIsImgOneVisible(false);
      }
      if (
        entry.target.classList.contains('image-section-2') &&
        entry.isIntersecting
      ) {
        setIsImgTwoVisible(true);
      } else {
        setIsImgTwoVisible(false);
      }
    });

    console.log(isImgOneVisible, isImgTwoVisible);

    if (isImgOneVisible || isImgTwoVisible) {
      setIsVisible(true);
    }
  };

  const options = {
    threshold: 0.9,
  };

  const fixedPart = useRef(null);
  const scrollingPart = useRef(null);
  const imgOne = useRef(null);
  const imgTwo = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(observersCallback, options);

    if (imgOne.current || imgTwo.current) observer.observe(imgOne.current);

    return () => {
      if (imgOne.current) observer.unobserve(imgOne.current);
    };
  }, [imgOne, imgTwo, options]);

  // console.log(fixedPart.current);
  console.log(isVisible, 'da li se vidi ceo');

  return (
    <PicturesFixedAndScrolling>
      <div
        ref={fixedPart}
        className={`${
          isVisible ? 'fixed-part addPositionFixed' : 'fixed-part'
        }`}
      >
        Some Text
      </div>
      <div className="scrolling-part">
        <div ref={imgOne} className="image-section-1">
          <img src="''../../images/2019-9.png" alt="first painter's picture" />
        </div>
        <div ref={imgTwo} className="image-section-2">
          <img
            src="''../../images/2019-10.png"
            alt="second painter's picture"
          />
        </div>
      </div>
    </PicturesFixedAndScrolling>
  );
};

const PicturesFixedAndScrolling = styled.article`
  display: flex;
  flex-direction: columns;
  width: 86vw;
  .fixed-part {
    width: 50vw;
    height: 100%;
    min-height: 100vh;
  }

  .addPositionFixed {
    position: sticky;
    top: 0;
  }

  .scrolling-part {
    width: 50vw;
    display: flex;
    flex-direction: column;
    place-items: center center;
  }

  .image-section-1,
  .image-section-2 {
    height: 100vh;
    width: 100%;
    /* overflow: hidden; */
  }
`;

export default PicturesHalfFixedHalfScrollingSection;
