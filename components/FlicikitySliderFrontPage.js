import React, { useRef, useEffect } from 'react';

const FlicikitySliderFrontPage = ({ imageCollection }) => {
  const slider = useRef(null);
  useEffect(() => {
    if (window !== 'undefined' && slider.current) {
      const flkty = new Flickity(slider.current, {
        cellAlign: 'center',
        contain: true,
        rightToLeft: false,
        pageDots: false,
        prevNextButtons: false,
      });
    }
  });

  return (
    <div ref={slider} class="main-carousel slider-with-left-indent">
      {imageCollection &&
        imageCollection.map((img) => {
          return (
            <div key={img.id} class="carousel-cell">
              <div className="carousel-image-wrapper">
                <img src={img.path} />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default FlicikitySliderFrontPage;
