import { useEffect } from 'react';
import { useAppContext } from '../../../../context/state';
import { useRouter } from 'next/router';

const SinglePictureFullSize = () => {
  const { showFullSizePicture, hideComponents } = useAppContext();

  const router = useRouter();

  return (
    <div className="fullSize-container">
      {showFullSizePicture ? (
        <img src={`../../${showFullSizePicture}`} />
      ) : null}
      <style jsx>{`
        @media screen and (max-width: 768px) {
          .fullSize-container {
            position: absolute;
            width: max-content;
            height: max-content;
          }

          footer {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default SinglePictureFullSize;
