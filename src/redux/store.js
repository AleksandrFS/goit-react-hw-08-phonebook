import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contacts/contactSlice';
import { filterContactSlice } from './contacts/filterContactsSlice';
import { authSlice } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    filter: filterContactSlice.reducer,
    auth: authSlice.reducer
  },
});
