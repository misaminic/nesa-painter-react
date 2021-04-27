import Link from 'next/link';
import { Button } from '@material-ui/core';

const Work = () => {
  return (
    <div className="work-container">
      <div className="worksByYears">
        <Link href="/work/2016-2017">
          <Button
            variant="contained"
            color="primary"
            href="#contained-buttons"
            style={{ marginRight: '0.5rem', padding: '5rem' }}
          >
            <span>2016 - 2017</span>
          </Button>
        </Link>
        <Link href="/work/2017-2019">
          <Button
            variant="contained"
            color="primary"
            href="#contained-buttons"
            style={{ marginRight: '0.5rem', padding: '5rem' }}
          >
            <span>2017 - 2019</span>
          </Button>
        </Link>

        <Link href="/work/2020-">
          <Button
            variant="contained"
            color="primary"
            href="#contained-buttons"
            style={{ marginRight: '0.5rem', padding: '5rem' }}
          >
            <span>2020 -</span>
          </Button>
        </Link>
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
