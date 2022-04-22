import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { makeStyles } from '@material-ui/core/styles';
import PrimaryArtButton from '../components/buildingBlocks/PrimaryArtButton';
import SecondaryArtButton from '../components/buildingBlocks/SecondaryArtButton';
import FlickitySliderFrontPage from '../components/FlicikitySliderFrontPage';
import RoundedButton from '../components/buildingBlocks/RoundedButton';
import PicturesHalfFixedHalfScrollingSection from '../components/PicturesHalfFixedHalfScrollingSection';

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

// Images for homePage slider
const imageCollection = [
  { id: 1, path: '/images/2016-1.png' },
  { id: 2, path: '/images/2016-2.png' },
  { id: 3, path: '/images/2016-3.png' },
  { id: 4, path: '/images/2016-4.png' },
  { id: 5, path: '/images/2016-5.png' },
  { id: 6, path: '/images/2016-6.png' },
];

function Home({ data }) {
  const [isEmail, setIsEmail] = useState('');
  const [isName, setIsName] = useState('');
  const [isUserDataValid, setIsUserDataValid] = useState(false);
  const [validationMsg, setValidationMsg] = useState('');
  const [isNameFieldLifted, setIsNameFieldLifted] = useState(false);
  const [isEmailFieldLifted, setIsEmailFieldLifted] = useState(false);
  const classes = useStyles();

  // show and hide form validation message
  useEffect(() => {
    if (validationMsg) {
      setTimeout(() => {
        setValidationMsg('');
      }, 3000);
    }
  }, [validationMsg]);

  // checking if a name and an email are entered
  const checkNameAndEmail = (e) => {
    if (isEmail === '') {
      setIsUserDataValid(false);
      setIsEmailFieldLifted(false);
      setValidationMsg('CHECK EMAIL');
    }

    if (!isName) {
      setIsUserDataValid(false);
      setIsNameFieldLifted(false);
      setValidationMsg('CHECK NAME');
    }
  };

  // newsletter form fields labels getting lifted when a user clicks on a form field
  const newsletterFormFieldControl = (e) => {
    if (e.target.type === 'text') {
      setIsNameFieldLifted(true);
    }

    if (e.target.type === 'email') {
      setIsEmailFieldLifted(true);
    }
  };

  return (
    <>
      <main className={styles.main}>
        <div className="home-hero__outer">
          <div className="home-hero">
            <h1 className="home-hero__msg">WELCOME</h1>
          </div>
          <PrimaryArtButton />
        </div>
        <section className="show-pictures">
          <article className="show-pictures__picture">
            <SecondaryArtButton />
          </article>
          <article className="draggable-slider-section">
            <FlickitySliderFrontPage imageCollection={imageCollection} />
          </article>
        </section>
        <section className="pictures-fixed-and-scrolling">
          <PicturesHalfFixedHalfScrollingSection />
        </section>
        <section className="newsletter">
          <article className="newsletter-article">
            <h5>NEWSLETTER</h5>
            <h3>Get notified about upcoming exibitions</h3>
            {validationMsg && (
              <p className="newsletter-form-validation-msg">{validationMsg}</p>
            )}
            <form
              action="https://api.sheetmonkey.io/form/daxCk8KF2DoNGqjVDmMCXg"
              method="POST"
              className="newsletter__form"
            >
              <div className="newsletter__form__fields">
                <label className="newsletter__name-label">
                  <input
                    type="text"
                    value={isName}
                    onChange={(e) => setIsName(e.target.value)}
                    onClick={(e) => newsletterFormFieldControl(e)}
                    className="newsletter__name-input"
                    name="Name"
                    required
                    autocomplete="off"
                  />
                  <span
                    className={`${
                      isNameFieldLifted
                        ? 'input-label__name lift-field__name'
                        : 'input-label__name'
                    }`}
                  >
                    Name
                  </span>
                </label>
                <label className="newsletter__email-label">
                  <input
                    type="email"
                    value={isEmail}
                    onChange={(e) => setIsEmail(e.target.value)}
                    onClick={(e) => newsletterFormFieldControl(e)}
                    className="newsletter__email-input"
                    name="Email"
                    required
                    autocomplete="off"
                  />
                  <span
                    className={`${
                      isEmailFieldLifted
                        ? 'input-label__email lift-field__email'
                        : 'input-label__email'
                    }`}
                  >
                    Email
                  </span>
                </label>
              </div>
              {/* <button type="submit">Send</button> */}
              <div className="submit-btn">
                <button
                  type="submit"
                  onClick={(e) => {
                    checkNameAndEmail(e);
                  }}
                >
                  SIGNUP
                </button>
              </div>
            </form>
          </article>
        </section>
      </main>
      <style jsx>{`
        .home-hero__outer {
          width: 100%;
        }
        .home-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          display: block;
          height: 100%;
        }

        .home-hero__msg {
          margin: 0 0;
          font-size: 17rem;
          font-weight: 400;
        }

        .show-pictures {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          background-color: var(--fourth-color);
        }

        .draggable-slider-section {
          position: relative;
          width: 100%;
          height: 600px;
          overflow: hidden;
          scroll-snap-type: x mandatory;
        }

        .newsletter {
          height: 20rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .newsletter__form {
          /* display: flex; */
          width: 100%;
          margin-bottom: 1.8rem;
        }

        .newsletter__form__fields {
          width: 100%;
          position: relative;
          display: flex;
          justify-content: space-between;
        }

        .newsletter__name-label,
        .newsletter__email-label {
          width: 100%;
          position: relative;
        }

        .newsletter__name-input,
        .newsletter__email-input {
          width: 90%;
          background: var(--third-color);
          border: 0;
          border-bottom: 2px solid var(--primary-color);
        }

        .newsletter__name-input:focus,
        .newsletter__email-input:focus {
          outline: 0;
        }

        .lift-field__name {
          transform: translateY(-28px);
          font-size: 0.75rem;
        }

        .lift-field__email {
          transform: translateY(-28px);
          font-size: 0.75rem;
        }

        /* .newsletter__email-input:focus + .input-label__email {
          transform: translateY(-28px);
          font-size: 0.75rem;
        } */

        .input-label__name {
          position: absolute;
          top: 0;
          left: 0;
          transition: all 0.3s ease;
        }

        .input-label__email {
          position: absolute;
          top: 0;
          left: 0;
          transition: all 0.3s ease;
        }

        .submit-btn {
          display: flex;
          justify-content: center;
          margin-top: 1.2rem;
        }

        .submit-btn button {
          padding: 0.8rem 2.2rem;
          color: var(--third-color);
          background: var(--primary-color);
          font-size: 1rem;
          font-weight: 600;
          line-height: 1rem;
          letter-spacing: 0.01rem;
          border-radius: 2rem;
          cursor: pointer;
        }

        /* :is(.form-control) label {
          position: relative;
        }

        :is(label) input {
          width: 35%;
          outline: 0;
          display: inline-block;
          width: 100%;
          text-align: left;
          padding-bottom: 0.4rem;
          margin-right: 0.4rem;
          white-space: nowrap;
          overflow: hidden;
          background: transparent;
          border: 0;
          border-bottom: 2px solid var(--primary-color);
        }

        .input-label {
          position: absolute;
          top: 50%;
          left: 0;
        } */
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.STRAPI_API_URL}${'/front-pages'}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Home;
