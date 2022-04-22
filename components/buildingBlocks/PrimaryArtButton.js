import { FaLocationArrow } from 'react-icons/fa';

const PrimaryArtButton = () => {
  return (
    <div className="primary-art-button__wrapper">
      <button className="primary-art-button">
        <span className="primary-art-button__icon">
          <FaLocationArrow />
        </span>
        <span>CHECK PICTURES</span>
      </button>
      <style jsx>{`
        .primary-art-button__wrapper {
          background: var(--third-color);
          display: flex;
          justify-content: center;
        }

        .primary-art-button {
          padding: 2rem 1.3rem;
          position: relative;
          z-index: 1;
          background-color: var(--primary-color);
          color: var(--third-color);
          font-size: 1.5rem;
          letter-spacing: 0.15rem;
          line-height: 0.8;
          font-weight: 600;
          border: 0;
          display: flex;
          align-items: center;
        }

        .primary-art-button:hover {
          color: var(--primary-color);
        }

        .primary-art-button::after {
          content: '';
          position: absolute;
          height: 100%;
          width: 0px;
          top: 0;
          left: 0;
          transition: all 0.5s ease;
          color: transparent;
          background-color: transparent;
          z-index: -2;
        }

        .primary-art-button__icon {
          display: block;
          transform: rotate(225deg);
          margin-right: 1rem;
          margin-left: 0.5rem;
        }

        .primary-art-button:hover:after {
          background-color: var(--fourth-color);
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default PrimaryArtButton;
