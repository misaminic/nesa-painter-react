import PictureItem from './PictureItem';
import classes from './PicturesList.module.css';
import data from '../data';
console.log(data);

const PicturesList = () => {
  return (
    <div className={classes.container}>
      <PictureItem data={data} />
    </div>
  );
};
export default PicturesList;
