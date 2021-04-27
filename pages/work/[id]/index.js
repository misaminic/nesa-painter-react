import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import dataSlugs from '../../../dataSlugs';

const workByPeriod = () => {
  const router = useRouter();
  const id = router.query.id;

  const [work, setWork] = useState([dataSlugs]);

  useEffect(() => {
    if (id) {
      const currentWork = dataSlugs.find((item) => {
        return item.id === id;
      });
      setWork(currentWork);
    } else {
      return [];
    }
  }, [id]);

  return (
    <div>
      <div>
        <section className="picture-section-container">
          {work.images
            ? work.images.map((item, index) => (
                <div className="picture-wrapper">
                  <Link key={index} href={`/work/${id}/${item.pictureId}`}>
                    <img src={item.img} className="picture-container" />
                  </Link>
                </div>
              ))
            : null}
        </section>
      </div>
      <style jsx>{`
        .picture-section-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem 2rem;
          margin-top: 2rem;
          margin-bottom: 2rem;
          color: transparent;
          text-shadow: 0 0 0 #fff;
        }

        .picture-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .picture-container {
          width: 100%;
          max-width: 30rem;
          height: auto;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default workByPeriod;
