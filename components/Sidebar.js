import Link from 'next/link';
import urls from '../links';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
}));

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const classes = useStyles();

  return (
    <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>
      <button className="close-btn" onClick={() => toggleSidebar()}>
        <CloseIcon className={classes.icon} />
      </button>
      <div className="side-container">
        <ul className={isOpen ? 'sidebar-links' : null}>
          <li onClick={() => toggleSidebar()}>
            <Link href="/work">WORK</Link>
          </li>
          <li onClick={() => toggleSidebar()}>
            <Link href="/about">BIO</Link>
          </li>
          <li onClick={() => toggleSidebar()}>
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
