import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import { NavigateLink } from 'components/NavigateLink/NavigateLink';
import classes from 'components/Header/Header.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={classes.container}>
      <Link to="/" className={classes.logo}>
        PORTFOL<span>IO</span>
      </Link>
      <div className={classes.btnGroup}>
        <NavigateLink to="/">HOME</NavigateLink>
        <NavigateLink to="/works">WORKS</NavigateLink>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
