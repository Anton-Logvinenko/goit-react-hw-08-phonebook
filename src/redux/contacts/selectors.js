import { createSelector } from '@reduxjs/toolkit';


export const selectContactsState = state => state.contacts.contacts;
export const selectFiltersState = state => state.filter.filter;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;


// Фильтрация c мемоизацией функции
 export const selectVisibleContacts = createSelector(
  [selectContactsState, selectFiltersState],
  (contacts, nameFilter) => {
    const normalaizeFilter = nameFilter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalaizeFilter)
    );
  }
);
