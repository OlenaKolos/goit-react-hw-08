import { createSelector } from "@reduxjs/toolkit";
import Fuse from "fuse.js";
import { selectContacts, selectNameFilter } from "../contacts/selectors";

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    if (filter.length > 0) {
      const fuseOption = {
        isCaseSensitive: false,
        keys: ["name", "number"],
      };
      const fuse = new Fuse(contacts, fuseOption);
      const data = fuse.search(filter);
      return data.map((item) => {
        return item.item;
      });
    } else {
      return contacts;
    }
  }
);
