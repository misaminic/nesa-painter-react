import classes from './Footer.module.css';
import { useAppContext } from '../context/state';

const Footer = () => {
  const { componentsVisibility } = useAppContext();
  // console.log(componentsVisibility);

  return (
    <>
      <footer
        className={
          componentsVisibility ? classes.footerSinglePic : classes.footer
        }
      >
        <h4>
          copyright&copy;{new Date().getFullYear()}
          &nbsp; all rights reserved
        </h4>
      </footer>
    </>
  );
};

export default Footer;
