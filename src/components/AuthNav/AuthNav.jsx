
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css'
export const AuthNav = () => {
 

  
  
  return (
    <div className={css.links} >

      <NavLink to="/register" className={css.link} > Registration </NavLink>
      <NavLink to="/login" className={css.link} > Login </NavLink>
    </div>
  );
};
