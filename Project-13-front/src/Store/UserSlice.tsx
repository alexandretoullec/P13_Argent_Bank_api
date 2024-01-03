import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  // A string name for this slice of state. Generated action type constants will use this as a prefix.
  name: "user",
  // The initial state value for this slice of state.
  initialState: {
    token: "",
    firstName: "",
    lastName: "",
  },
  // An object containing Redux "case reducer" functions (functions intended to handle a specific action type, equivalent to a single case statement in a switch).
  reducers: {
    itsToken: (state, action) => {
      state.token = action.payload;
    },
    itsFirstname: (state, action) => {
      state.firstName = action.payload;
    },
    itsLastname: (state, action) => {
      state.lastName = action.payload;
    },
  },
});

export const { itsToken, itsFirstname, itsLastname } = userSlice.actions;

export const useReducer = userSlice.reducer;
