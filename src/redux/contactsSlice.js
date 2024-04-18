import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContacts, deleteContacts, fetchContacts } from "./contactsOps";


const initialState = {
  contacts: [],
  loading: false,
  error: null,
};


const slice = createSlice({
  name: "contacts",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
      })

      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter((item) => item.id !== payload);
      })

      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
      })

      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContacts.pending,
          addContacts.pending
        ),
        (state) => {
          state.loading = true;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContacts.rejected,
          addContacts.rejected
        ),
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          deleteContacts.fulfilled,
          addContacts.fulfilled
        ),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const contactReducer = slice.reducer;
