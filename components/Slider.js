import { useState, useEffect } from 'react';
import classes from './Slider.module.css';
import data from '../data';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Slider = () => {
  const [pictures, setPictures] = useState(data);
  const [index, setIndex] = useState(0);
  console.log(index);

  useEffect(() => {
    const lastIndex = pictures.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, pictures]);

  return (
    <section className={classes.section}>
      <div className={classes.sectionCenter}>
        {pictures.map((picture, pictureIndex) => {
          const { id, image } = picture;
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
            <article key={id} className={`${classes.personImg} ${position}`}>
              <img src={image} alt={id} />
            </article>
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
            transform: translateX(100%);
          }
        `}</style>
      </div>
    </section>
  );
};

export default Slider;
