import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import css from './Registerform.module.css';


export const RegisterForm = () => {
  const dispatch = useDispatch();
 
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const userData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
       dispatch(register(userData));
    form.reset();
     
  };

  return (
    <div>
      <h2 className={css.title}>Registaration form</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <lable className={css.lable}>
          User name <br />
          <input className={css.input} type="text" name="name" />
        </lable>
        <lable className={css.lable}>
          Email <br />
          <input className={css.input} type="email" name="email" />
        </lable>
        <lable className={css.lable}>
          Password <br />
          <input className={css.input} type="password" name="password" />
        </lable>
        <button className={css.btn} type="submit">
          Registration
        </button>
      </form>
            </div>
  );
};
