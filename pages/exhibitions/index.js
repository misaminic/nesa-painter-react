import Link from 'next/link';

const Exhibitions = () => {
  return (
    <div className="exhibitions-container">
      <div>
        <h1>Dom omladine Beograda</h1>
        <h3>27/5/2021</h3>
        <Link href="/exhibitions/1">
          <img src="/images/4.png" width="500" height="600" />
        </Link>
      </div>
      <div>
        <h1>SKC Beograd</h1>
        <h3>17/6/2021</h3>
        <Link href="/exhibitions/1">
          <img src="/images/2.jpg" width="500" height="600" />
        </Link>
      </div>
      <style jsx>{`
        .exhibitions-container {
          margin-top: 3rem;
          display: flex;
          justify-content: center;
        }

        .exhibitions-container div {
          text-align: center;
          flex-grow: 1;
        }

        .exhibitions-container img {
          color: transparent;
          text-shadow: 0 0 0 #fff;
          cursor: pointer;
        }

        exhibitions-container img:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default Exhibitions;
