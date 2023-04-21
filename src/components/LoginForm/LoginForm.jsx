import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import css from '../RegisterForm/Registerform.module.css'


export const LoginForm = () => {


  const dispatch = useDispatch();

  const handelSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const loginData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(logIn(loginData));
       form.reset();
       };


 
  return (
    <div>
      <h2 className={css.title}> Enter email and password</h2>
      <form className= {css.form} onSubmit={handelSubmit}>
        <leble className={css.lable}>
          Email
          <input className= {css.input} type="email" name="email" />
        </leble>
        <leble className={css.lable}>
          Password
          <input className= {css.input} type="password" name="password" />
        </leble>

        <button className={css.btn} type="submit">Login</button>
      </form>
   
         </div>
  );
};
