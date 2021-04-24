import classes from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <footer className={classes.footer}>
        <h4>
          copyright&copy;{new Date().getFullYear()}
          &nbsp; all rights reserved
        </h4>
      </footer>
    </>
  );
};

export default Footer;
