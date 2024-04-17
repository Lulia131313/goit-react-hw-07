import { createSlice } from "@reduxjs/toolkit";
import contactData from "../task.json";

const initialState = {
  contacts: contactData,
};

export const selectContacts = (state) => state.contacts.contacts;

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter((item) => item.id !== payload);
    },
  },
});

export const contactReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;
