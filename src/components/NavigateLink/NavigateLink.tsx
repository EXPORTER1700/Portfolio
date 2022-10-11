import { FC } from 'react';
import { Link, LinkProps, useMatch } from 'react-router-dom';
import classes from 'components/NavigateLink/NavigateLink.module.scss';
import { combineClasses } from 'utils/combineClasses';

interface NavigateLinkProps extends LinkProps {
  to: string;
}

export const NavigateLink: FC<NavigateLinkProps> = ({
  className,
  to,
  ...props
}) => {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });

  return (
    <Link
      to={to}
      {...props}
      className={combineClasses(
        classes.link,
        className,
        match ? classes.active : '',
      )}
    />
  );
};
