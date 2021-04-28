import { useState, useEffect, useRef } from 'react';
// import { useHistory } from 'react-router-dom';
import { useRouter } from 'next/router';
import classes from './Slider.module.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Slider = ({ data }) => {
  const [pictures, setPictures] = useState([data]);
  const [singlePicture, setSinglePicture] = useState([]);
  const [index, setIndex] = useState(0);
  const [sliderHeight, setSliderHeight] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);

  const router = useRouter();
  let id = parseInt(router.query.pictureId);

  console.log(id);

  const sliderPicture = useRef(null);

  useEffect(() => {
    if (data) {
      const tempPicture = data.find((item) => {
        return item.pictureId == id;
      });
      setSinglePicture(tempPicture);
    }
  });

  console.log(singlePicture);
  console.log(id);

  useEffect(() => {
    if (sliderPicture) {
      setSliderHeight(sliderPicture.current.offsetHeight);
    }
    if (sliderPicture.offsetWidth > 330) {
      setSliderWidth('adjust-width');
    } else {
      return 0;
    }
  }, [sliderPicture]);

  useEffect(() => {
    setPictures(data);
    const lastIndex = pictures.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, pictures]);

  return (
    <section className={classes.section} style={{ height: sliderHeight }}>
      <div className={classes.sectionCenter}>
        {pictures.map((picture, pictureIndex) => {
          const { pictureId, img, title, technique, size, year } = picture;
          let position = 'nextSlide';
          if (pictureIndex === index) {
            position = 'activeSlide';
          }
          if (
            pictureIndex === index - 1 ||
            (index === 0 && pictureIndex === pictures.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <>
              <article
                key={pictureId}
                className={`${classes.personImg} ${position}`}
                style={{ height: sliderHeight }}
              >
                <img
                  src={img}
                  alt={pictureId}
                  ref={sliderPicture}
                  className={sliderWidth}
                />
                <h3>{title}</h3>
                <p>{technique}</p>
                <p>{size}</p>
                <p>{year}</p>
              </article>
            </>
          );
        })}
        <button className={classes.prev} onClick={() => setIndex(index - 1)}>
          <ArrowBackIosIcon />
        </button>
        <button className={classes.next} onClick={() => setIndex(index + 1)}>
          <ArrowBackIosIcon />
        </button>
        <style jsx>{`
          .activeSlide {
            opacity: 1;
            transform: translateX(0);
          }

          .lastSlide {
            transform: translateX(-100%);
          }

          .nextSlide {
            overflow: hidden;
            transform: translateX(100%);
          }
        `}</style>
      </div>
    </section>
  );
};

export default Slider;
