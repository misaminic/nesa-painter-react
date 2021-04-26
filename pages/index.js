import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Button from '@material-ui/core/Button';
import PicturesList from '../components/PicturesList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'green',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <main className={styles.main}>
        <PicturesList />
      </main>
    </>
  );
}
