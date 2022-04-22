import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import dataSlugs from '../../../../dataSlugs';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Slider from '../../../../components/Slider';
import { useAppContext } from '../../../../context/state';

const SinglePicture = () => {
  const router = useRouter();
  const {
    showFullSizePicture,
    getNextPictures,
    nextPictures,
  } = useAppContext();

  const id = parseInt(router.query.pictureId);
  const productionYear = router.query.id;

  const [picture, setPicture] = useState(dataSlugs);
  const [showPicture, setShowPicture] = useState(false);
  const [showSlider, setShowSlider] = useState(true);
  const [defaultPictures, setDefaultPictures] = useState(dataSlugs);

  useEffect(() => {
    if (id) {
      const tempPicture = dataSlugs.map((item) => {
        const { images } = item;
        return images.find((item) => {
          const { pictureId } = item;
          return pictureId == id;
        });
      });

      const currentPicture = tempPicture.filter((item) => {
        return item != null;
      });

      setPicture(currentPicture[0]);
    } else {
      return [];
    }
  }, [id]);

  useEffect(() => {
    if (showSlider) {
      let tempPictures = dataSlugs.find((item) => {
>       return item.id === productionYear ? item.images : null;
      });
      const { images } = tempPictures;
      const clickedPicture = images.find((item) => item.pictureId == id);
      const removedDuplicate = images.filter((item) => item.pictureId !== id);
      const newCollectionToShow = [clickedPicture, ...removedDuplicate];
      getNextPictures(newCollectionToShow);
      setDefaultPictures(newCollectionToShow);
    }
  }, [id]);

  return (
    <div>
      <section className="picture-container">
        <article>
          <Slider data={defaultPictures} />
        </article>
      </section>
      <style jsx>{`
        position: relative;
        height: 100vh;

        .section-position {
          display: flex;
        }

        article img {
          width: 100%;
          height: auto;
        }

        article h3,
        p {
          margin: 0;
          margin-top: 0.3rem;
        }

        article p:last-child {
          margin-bottom: 0.5rem;
        }

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

        .prev,
        .next {
          position: absolute;
          top: 50%;
          border: none;
          font-family: 'Roboto', sans-serif;
          background-color: transparent;
          cursor: pointer;
        }

        .prev > svg:first-child,
        .next > svg:first-child {
          font-size: 2.5rem;
        }

        .next > svg:first-child {
          transform: rotate(180deg);
        }

        .prev {
          left: 10%;
        }

        .next {
          right: 10%;
        }

        .picture {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: ease-in 0.3s;
          color: transparent;
          text-shadow: 0 0 0 #fff;
        }

        .picture:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default SinglePicture;
