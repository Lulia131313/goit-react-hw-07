import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "./filtersSlice";

export const selectContacts = (state) => state.contacts.contacts;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const searchText = filter.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(searchText) ||
        contact.number.toLowerCase().includes(searchText)
    );
  }
);
