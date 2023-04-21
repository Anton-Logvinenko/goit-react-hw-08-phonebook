import { useSelector } from "react-redux";
import {selectAuthIsLogged} from '../redux/auth/authSelectors';
import { Navigate } from "react-router-dom";

export const RestrictRoute=({component, redirectTo })=>{

    const isLogged = useSelector(selectAuthIsLogged) 

return isLogged ? <Navigate to={redirectTo}/>: component;
}