

// -  If the route is private and the user is logged in, render the component
//-  Otherwise render <Navigate> to redirectTo

import { useSelector } from "react-redux";
import {selectAuthIsLogged, selectAuthIsRefreshing} from '../redux/auth/authSelectors';
import { Navigate } from "react-router-dom";

export const PrivateRoute=({component , redirectTo='/'} )=>{
    // console.log('Cmponent', Component)
const IsLogged = useSelector(selectAuthIsLogged)
const IsRefreshing =useSelector(selectAuthIsRefreshing)

// redirect  на login если разлогинелся находять в contacts  
const redirect =!IsLogged && !IsRefreshing
return redirect ? <Navigate to={redirectTo} /> : component;
}



// export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
//     const { isLoggedIn, isRefreshing } = useAuth();
//     const shouldRedirect = !isLoggedIn && !isRefreshing;
  
//     return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
//   };