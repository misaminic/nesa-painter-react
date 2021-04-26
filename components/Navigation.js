import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <nav className={classes.mainNavigation}>
        <ul className={classes.navList}>
          <li>
            <Link href="/work">work</Link>
          </li>
          <li>
            <Link href="/exhibitions">exhibitions</Link>
          </li>
          <li>
            <Link href="/about">bio</Link>
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
        </ul>
        <ul className={classes.authorName}>
          <li>
            <Link href="/">Nebojsa Adamovic</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
