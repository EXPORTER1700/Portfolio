import classes from 'components/ThemeSwitcher/ThemeSwitcher.module.scss';
import SunIcon from 'assets/images/sun-icon.svg';
import MoonIcon from 'assets/images/moon-icon.svg';
import { useTheme } from 'hooks/useTheme';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={classes.container}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'dark' && <img src={SunIcon} alt="sun" />}
      <div className={`${classes.switch} ${classes[theme]}`} />
      {theme === 'light' && <img src={MoonIcon} alt="moon" />}
    </button>
  );
};
