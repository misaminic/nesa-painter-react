import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import dataSlugs from '../../../dataSlugs';

const SinglePicture = () => {
  const router = useRouter();

  const id = parseInt(router.query.pictureId);

  const [picture, setPicture] = useState(dataSlugs);
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

  if (picture) {
  }

  return (
    <div>
      <section className="picture-container">
        <article>{picture.img ? <img src={picture.img} /> : null}</article>
        <article>
          <h3>{picture.title}</h3>
          <p>{picture.technique}</p>
          <p>{picture.size}</p>
          <p>{picture.year}</p>
        </article>
      </section>
      <style jsx>{`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2rem;
        margin-bottom: 2rem;

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
      `}</style>
    </div>
  );
};

export default SinglePicture;
