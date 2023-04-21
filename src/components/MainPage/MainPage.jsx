import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectAuthUserName,
  selectAuthIsLogged,
} from '../../redux/auth/authSelectors';

import css from './MainPage.module.css'

export const MainPage = () => {
  const userName = useSelector(selectAuthUserName);
  const isLoggedIn = useSelector(selectAuthIsLogged);

  return (
    <div className={css.conteiner}>
      {isLoggedIn ? (
        <p className={css.text}>
       
          Welcome, <span className={css.userName}> {userName} </span> !<br /> Go to your <br /> <Link className={css.link} to="/contacts">'Phonebook'</Link>{' '}
        </p>
      ) : (
        <p className={css.text}>
                  Welcome to phonebook! Please, <Link className={css.link} to="/register">  Register</Link> or{' '}
          <Link className={css.link} to="/login">Login</Link>
        </p>
      )}
    </div>
  );
};
