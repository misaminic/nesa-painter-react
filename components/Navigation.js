import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import classes from './Navigation.module.css';
import MenuIcon from '@material-ui/icons/Menu';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   icon: {
//     [theme.breakpoints.down('sm')]: {
//       fontSize: '2rem',
//     },
//   },
// }));

const Navigation = ({ toggleSidebar }) => {
  // const classes = useStyles();

  return (
    <>
      <nav className={classes.mainNavigation}>
        <ul className={classes.navList}>
          <li>
            <Link href="/work">work</Link>
          </li>
          {/* <li>
            <Link href="/exhibitions">exhibitions</Link>
          </li> */}
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
      <button
        type="button"
        className="toggle-btn"
        onClick={() => toggleSidebar()}
      >
        <MenuIcon className={classes.icon} />
      </button>
      <style jsx>
        {`
          .toggle-btn {
            display: none;
          }

          @media screen and (max-width: 768px) {
            .toggle-btn {
              display: block;
              margin-top: 1.5rem;
              background: transparent;
              border-color: transparent;
              cursor: pointer;
            }
          }
        `}
      </style>
    </>
  );
};

export default Navigation;
