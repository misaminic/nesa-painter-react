import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import classes from './Slider.module.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useAppContext } from '../context/state';

const Slider = ({ data, clickedPicture }) => {
  const { hideComponents, getCurrentPicture, getNewCollection, newCollection } =
    useAppContext();
  const [pictures, setPictures] = useState(data);
  const [index, setIndex] = useState(0);

  const router = useRouter();
  let id = parseInt(router.query.pictureId);
  let productionYear = router.query.id;

  const sliderPicture = useRef(null);

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

  const currentPicData = (url, picture) => {
    getCurrentPicture(url);
    getNewCollection(picture);
  };

  const setPictureArrowsNext = () => {
    setIndex(index + 1);
  };
  const setPictureArrowsPrev = () => {
    setIndex(index - 1);
  };

  return (
    <section className={classes.section}>
      <div className={classes.sectionCenter}>
        {newCollection.length === 0
          ? pictures.map((picture, pictureIndex) => {
              console.log(picture.name);
              const {
                _id,
                url,
                hash,
                name,
                // title,
                // technique,
                // size,
                // year,
              } = picture;
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
                    key={_id}
                    className={`${classes.personImg} ${position}`}
                  >
                    <Link href={`/work/${hash}/${_id}/${_id}-full-size`}>
                      <img
                        src={url}
                        alt={name}
                        ref={sliderPicture}
                        // className={sliderWidth}
                        onClick={() => {
                          currentPicData(url, picture);
                        }}
                      />
                    </Link>

                    <div className={classes.pictureInfo}>
                      {/* <h3>{title}</h3> */}
                      {/* <p>{technique}</p>
                      <p>{size}</p>
                      <p>{year}</p> */}
                    </div>
                  </article>
                </>
              );
            })
          : newCollection.map((picture, pictureIndex) => {
              const {
                _id,
                url,
                hash,
                name,
                // title,
                // technique,
                // size,
                // year,
              } = picture;
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
                    key={_id}
                    className={`${classes.personImg} ${position}`}
                  >
                    <Link href={`/work/${hash}/${_id}/${_id}-full-size`}>
                      <img
                        src={url}
                        alt={name}
                        ref={sliderPicture}
                        // className={sliderWidth}
                        onClick={() => {
                          currentPicData(url, picture);
                        }}
                      />
                    </Link>

                    <div className={classes.pictureInfo}>
                      {/* <h3>{title}</h3> */}
                      {/* <p>{technique}</p>
                      <p>{size}</p>
                      <p>{year}</p> */}
                    </div>
                  </article>
                </>
              );
            })}
        <button className={classes.prev} onClick={() => setPictureArrowsNext()}>
          <ArrowBackIosIcon />
        </button>
        <button className={classes.next} onClick={() => setPictureArrowsPrev()}>
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
      <div className={classes.mobileSliderButtons}>
        <button
          className={classes.mobilePrev}
          onClick={() => setPictureArrowsPrev()}
        >
          <ArrowBackIosIcon />
        </button>
        <button
          className={classes.mobileNext}
          onClick={() => setPictureArrowsNext()}
        >
          <ArrowBackIosIcon />
        </button>
      </div>
    </section>
  );
};

export default Slider;
