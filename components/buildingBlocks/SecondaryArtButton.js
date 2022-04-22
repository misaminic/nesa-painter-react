import { FaLocationArrow } from 'react-icons/fa';

const SecondaryArtButton = () => {
  return (
    <div className="secondary-art-button__wrapper">
      <button className="secondary-art-button">
        <span className="secondary-art-button__icon">
          <FaLocationArrow />
        </span>
        <span>RECENT EXHIBITIONS</span>
      </button>
      <style jsx>{`
        .secondary-art-button__wrapper {
          background: transparent;
          display: flex;
          justify-content: center;
          margin-right: 20rem;
        }

        .secondary-art-button {
          padding: 2rem 3rem;
          padding-right: 4.2rem;
          position: relative;
          z-index: 1;
          background-color: var(--third-color);
          color: var(--primary-color);
          font-size: 1.5rem;
          letter-spacing: 0.15rem;
          line-height: 0.8;
          font-weight: 600;
          border: 0;
          display: flex;
          align-items: center;
        }

        .secondary-art-button:hover {
          color: var(--primary-color);
        }

        .secondary-art-button::after {
          content: '';
          position: absolute;
          height: 100%;
          width: 0px;
          top: 0;
          right: 0;
          transition: all 0.5s ease;
          color: transparent;
          background-color: transparent;
          z-index: -2;
        }

        .secondary-art-button__icon {
          display: block;
          transform: rotate(45deg);
          margin-right: 1rem;
          position: absolute;
          right: 14px;
          bottom: 28px;
        }

        .secondary-art-button:hover:after {
          background-color: var(--primary-color);
          width: 100%;
        }

        .secondary-art-button:hover {
          color: var(--third-color);
        }
      `}</style>
    </div>
  );
};

export default SecondaryArtButton;
