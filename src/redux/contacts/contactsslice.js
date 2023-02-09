import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [];

export const myContactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {

    addContacts(state, action) {
      console.log(action.payload)
      state.items.push(action.payload);
    },
    removeContacts(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});


export const { addContacts, removeContacts } = myContactsSlice.actions;
export const contactsReducer = myContactsSlice.reducer;