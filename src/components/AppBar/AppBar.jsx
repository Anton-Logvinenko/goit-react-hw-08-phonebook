import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { AuthMenu } from '../AuthMenu/AuthMenu';
import { useSelector } from 'react-redux';
import { selectAuthIsLogged } from '../../redux/auth/authSelectors';

import css from './AppBar.module.css';

export const AppBar = () => {
  const isLogged = useSelector(selectAuthIsLogged);
  return (
    <header className={css.header}>
      <Navigation   />
      {!isLogged ? <AuthNav  /> : <AuthMenu />}
    </header>
  );
};
