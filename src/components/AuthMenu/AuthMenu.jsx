import { useDispatch, useSelector } from "react-redux"
import {selectAuthUserEmail} from '../../redux/auth/authSelectors'
import {logOut} from '../../redux/auth/authOperations'
import css from './AuthMenu.module.css'


export const AuthMenu=()=>{
const dispatch=useDispatch()
const userEmail= useSelector(selectAuthUserEmail)


const handelClick=()=>{ dispatch(logOut())

}
return(
<div className={css.menuConteiner} >
<p className={css.text}>  Welcome , <span  className={css.userEmail} > {userEmail}</span></p>
<button onClick={handelClick} className={css.btn}>Logout</button>

</div>


)



}