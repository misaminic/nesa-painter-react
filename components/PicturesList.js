import PictureItem from './PictureItem';
import classes from './PicturesList.module.css';
import data from '../data';

const PicturesList = ({ images }) => {
  const imagesArray = images.map((item) => {
    return item.image;
  });
  return (
    <div className={classes.container}>
      <PictureItem data={imagesArray} />
    </div>
  );
};

export default PicturesList;
