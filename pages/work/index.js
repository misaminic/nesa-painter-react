import Link from 'next/link';
import { Button } from '@material-ui/core';

const Work = () => {
  return (
    <div className="work-container">
      <div className="worksByYears">
        <Button
          variant="contained"
          color="primary"
          href="#contained-buttons"
          style={{ marginRight: '0.5rem', padding: '5rem' }}
        >
          <Link href="/work/2016-2017">
            <span>2016 - 2017</span>
          </Link>
        </Button>
        <Button
          variant="contained"
          color="primary"
          href="#contained-buttons"
          style={{ marginRight: '0.5rem', padding: '5rem' }}
        >
          <Link href="/work/2017-2019">
            <span>2017 - 2019</span>
          </Link>
        </Button>
        <Button
          variant="contained"
          color="primary"
          href="#contained-buttons"
          style={{ marginRight: '0.5rem', padding: '5rem' }}
        >
          <Link href="/work/2020-">
            <span>2020 -</span>
          </Link>
        </Button>
      </div>

      <style jsx>{`
        .work-container {
          height: 80vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 0.5rem;
        }

        .worksByYears button {
          margin-right: 0.5rem;
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
    </div>
  );
};

export default Work;
