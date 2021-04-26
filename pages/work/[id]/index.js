import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import dataSlugs from '../../../dataSlugs';

const workByPeriod = () => {
  const router = useRouter();

  //   console.log(dataSlugs);
  //   console.log(router.query.id);
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
                  <img src={item.img} className="picture-container" />
                </Link>
              ))
            : null}
        </section>
      </div>
      <style jsx>{`
        .picture-section-container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2rem 2rem;
          margin-top: 2rem;
          margin-bottom: 2rem;
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
