import Photo from 'assets/images/photo.jpg';
import classes from 'pages/Home/HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={classes.container}>
      <img className={classes.photo} src={Photo} alt="photo" />
      <p></p>
    </div>
  );
};

export default HomePage;
