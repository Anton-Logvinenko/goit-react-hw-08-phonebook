import React from 'react';
import css from './filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { contactsFilter } from '../../../redux/contacts/filterSlice';
import { contactsSort } from '../../../redux/contacts/contactsSlice';
import { selectFiltersState } from '../../../redux/contacts/selectors';

function Filter() {
  const dispatch = useDispatch();
  const nameValue = useSelector(selectFiltersState);

  // сохранение имени из  фильтра-инпута state
  const handelChange = e => {
    dispatch(contactsFilter(e.target.value));
  };
  // Сортировка контактов
  const handelOnClick = () => {
    dispatch(contactsSort());
  };

  return (
    <>  <lable className={css.filterLable}>
    Find contacts
    <input
      className={css.filterInput}
      type="text"
      value={nameValue}
      onChange={handelChange}
    />
  </lable>
  <button className={css.sortBtn} type='button' onClick={handelOnClick}>
    Sort  A-Z
  </button></>  
  

 
   
  );
}

export { Filter };
