import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    padding: '5rem',
    marginRight: '1rem',
    [theme.breakpoints.down('sm')]: {
      padding: '1.5rem',
      marginBottom: '1.5rem',
      marginRight: '0',
    },
  },
}));

const Work = () => {
  const classes = useStyles();

  return (
    <div className="work-container">
      <div className="worksByYears mobile">
        <Link href="/work/2016">
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            href="#contained-buttons"
          >
            <span>2016 - 2017</span>
          </Button>
        </Link>
        <Link href="/work/2019">
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            href="#contained-buttons"
          >
            <span>2017 - 2019</span>
          </Button>
        </Link>

        <Link href="/work/2020">
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            href="#contained-buttons"
          >
            <span>2020 - 2021</span>
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

        .MuiButton-root {
          margin-right: 1rem !important;
        }

        @media screen and (max-width: 960px) {
          .mobile {
            display: flex;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Work;
