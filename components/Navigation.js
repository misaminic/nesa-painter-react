import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import classes from './Navigation.module.css';
import MenuIcon from '@material-ui/icons/Menu';
import { VscSymbolColor } from 'react-icons/vsc';
import { FiPlay } from 'react-icons/fi';
import { MdAlternateEmail } from 'react-icons/md';
import { BsCalendar2Event } from 'react-icons/bs';
import { BsBrush } from 'react-icons/bs';

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
            <div className={classes.menuItem} data-tooltip="home">
              <Link href="/">
                <FiPlay />
              </Link>
            </div>
          </li>
          <li>
            <div className={classes.menuItem} data-tooltip="exibitions">
              <Link href="/exhibitions">
                <BsCalendar2Event />
              </Link>
            </div>
          </li>
          <li className={classes.homeIcon}>
            <div className={classes.menuItem} data-tooltip="gallery">
              <Link href="/work">
                <VscSymbolColor />
              </Link>
            </div>
          </li>

          <li>
            <div className={classes.menuItem} data-tooltip="painter bio">
              <Link href="/about">
                <BsBrush />
              </Link>
            </div>
          </li>
          <li>
            <div className={classes.menuItem} data-tooltip="contact">
              <Link href="/contact">
                <MdAlternateEmail />
              </Link>
            </div>
          </li>
        </ul>
        {/* <ul className={classes.authorName}>
          <li>
            <Link href="/">Nebojsa Adamovic</Link>
          </li>
        </ul> */}
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
