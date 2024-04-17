import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  loading: false,
  error: null,
};

export const selectContacts = (state) => state.contacts.contacts;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

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
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    error: (state, { payload }) => {
      state.error = payload;
    },
    setData: (state, { payload }) => {
      state.contacts = payload;
    },
  },
});

export const contactReducer = slice.reducer;
export const { addContact, deleteContact, setLoading, error, setData } =
  slice.actions;
