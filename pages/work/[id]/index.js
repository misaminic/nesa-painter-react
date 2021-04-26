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
                <Link key={index} href={`/work/${id}/${item.pictureId}`}>
                  <div className="picture-wrapper">
                    <img src={item.img} className="picture-container" />
                  </div>
                </Link>
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

        .picture:focus {
          outline: none;
        }
        .picture-container {
          width: 100%;
          height: auto;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default workByPeriod;
