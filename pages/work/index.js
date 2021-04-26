import Link from 'next/link';

const Work = () => {
  return (
    <>
      <div className="worksByYears">
        <Link href="/work/2016-2017">
          <span>2016 - 2017</span>
        </Link>
        <Link href="/work/2017-2019">
          <span>2017 - 2019</span>
        </Link>
        <Link href="/work/2020-">
          <span>2020 -</span>
        </Link>
      </div>
      <style jsx>{`
        .worksByYears {
          margin-top: 0.5rem;
        }
        .worksByYears span {
          margin-right: 1rem;
          padding: 0.5rem;
          cursor: pointer;
          text-shadow: 0 0 0 #fff;
        }
        .worksByYears:focus {
          outline: none;
        }
      `}</style>
    </>
  );
};

export default Work;
