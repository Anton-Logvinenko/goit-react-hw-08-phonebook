import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';

import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import HomePage from '../../pages/HomePage';
import Contacts from '../../pages/Contacts';
import RegisterPage from '../../pages/RegisterPage';
import LoginPage from '../../pages/LoginPage';
import { PrivateRoute } from '../PrivateRouter';
import { RestrictRoute } from '../RestrictRoute';
import { refreshUser } from '../../redux/auth/authOperations';
import { selectAuthIsRefreshing } from '../../redux/auth/authSelectors';
import css from './App.module.css';


function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Fetching user data...</b>
  ) : (
    <div className={css.mainConteiner}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictRoute redirectTo="/contacts" component={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
    </div>
   
  );
}

export { App };
