import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
// import dataSlugs from '../../../dataSlugs';

const workByPeriod = ({ data }) => {
  console.log(data);
  const router = useRouter();
  const id = router.query.id;

  const [work, setWork] = useState(data);

  useEffect(() => {
    if (data) {
      // const currentWork = data.find((item) => {
      //   return item.id === id;
      // });
      setWork(data);
    } else {
      return [];
    }
  }, [data]);

  console.log(work[0].images[0].image[0].url);

  return (
    <div>
      <div>
        <section className="picture-section-container">
          {work.map((item, index) => {
            return item.images.map((item) => {
              return item.image.map((item) => {
                console.log(item.hash);
                return (
                  <div className="picture-wrapper">
                    <Link key={index} href={`/work/${id}/${item.id}`}>
                      <img
                        key={index}
                        src={item.url}
                        className="picture-container"
                      />
                    </Link>
                  </div>
                );
              });
            });
          })}
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

export async function getStaticProps(context) {
  console.log(context);
  const { params } = context;

  const yearId = params.id;

  const res = await fetch(
    `${process.env.STRAPI_API_URL}${`/paint-years?year=${yearId}`}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.STRAPI_API_URL}${'/paint-years'}`);
  const data = await res.json();

  console.log(data);

  const paths = data.map((item) => ({
    params: { id: item.year },
  }));

  return { paths, fallback: false };
}

export default workByPeriod;
