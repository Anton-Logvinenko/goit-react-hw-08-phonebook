import { createSlice } from '@reduxjs/toolkit';

const initialFilter = {filter:''};

const filterSlice= createSlice(
{
name: 'filter',
initialState:initialFilter,
reducers:{
contactsFilter(state, action){ state.filter = action.payload},
}
}
)

 export const filterReducer= filterSlice.reducer
 export const {contactsFilter} = filterSlice.actions

