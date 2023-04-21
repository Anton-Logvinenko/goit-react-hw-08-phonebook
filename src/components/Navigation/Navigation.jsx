import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectAuthIsLogged } from '../../redux/auth/authSelectors';
import css from '../AuthNav/AuthNav.module.css';

export const Navigation =()=>{
  const isLogged = useSelector(selectAuthIsLogged)

    return(
<nav  className={css.links}>
  <NavLink to ="/" className={css.link}  > Home</NavLink>
  {isLogged &&  <NavLink to ='/contacts'  className={css.link} > Contacts</NavLink>}
 </nav>
    )
}