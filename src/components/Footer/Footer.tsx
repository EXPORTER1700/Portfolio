import {
  InstagramIcon,
  TelegramIcon,
  LinkedinIcon,
  GitIcon,
} from 'assets/images/socials';
import classes from 'components/Footer/Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={classes.container}>
      <a href="https://www.instagram.com/i_stetsenko_/" target="_blank">
        <img src={InstagramIcon} alt="instagram" />
      </a>
      <a href="https://t.me/exporter_1700" target="_blank">
        <img src={TelegramIcon} alt="telegram" />
      </a>
      <a
        href="https://www.linkedin.com/in/%D0%B8%D0%BB%D1%8C%D1%8F-%D1%81%D1%82%D0%B5%D1%86%D0%B5%D0%BD%D0%BA%D0%BE-56b013239/"
        target="_blank"
      >
        <img src={LinkedinIcon} alt="linkedin" />
      </a>
      <a href="https://github.com/EXPORTER1700" target="_blank">
        <img src={GitIcon} alt="git" />
      </a>
    </footer>
  );
};
