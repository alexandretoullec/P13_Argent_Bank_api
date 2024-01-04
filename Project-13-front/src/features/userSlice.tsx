import { createSlice } from "@reduxjs/toolkit";

/**
 * @function userSlice - Creates a slice of the redux store for the user object
 * @param {object} user - The user object is used to store the user's first name, last name, email, and token
 * @param {function} login - The login function is used to update the user object in the redux store when the user logs in
 * @param {function} logout - The logout function is used to update the user object in the redux store when the user logs out
 * @param {function} updateUser - The updateUser function is used to update the user object in the redux store when the user updates their first name or last name
 * @returns {object} - The user object in the redux store is updated when the user logs in, logs out, or updates their first name or last name
 */
export const userSlice = createSlice({
  // name of the slice, used in action types
  name: "user",
  // initial state for the reducer
  initialState: {
    // if the user is logged in, set the user object to the user object in local storage or session storage. If the user is not logged in, set the user object to null
    user: sessionStorage.getItem("userSession")
      ? sessionStorage.getItem("userSession")
      : localStorage.getItem("user")
      ? localStorage.getItem("user")
      : null,
  },
  // reducers are functions that take the current state and an action object as arguments, and return a new state
  reducers: {
    /* login function is used to update the user object in the redux store when the user logs in */
    login: (state, action) => {
      // if the user checks the remember me checkbox, set the user object in local storage
      if (action.payload.rememberMe) {
        localStorage.setItem("user", JSON.stringify(action.payload));
        // if the user does not check the remember me checkbox, set the user object in session storage
      } else {
        sessionStorage.setItem("userSession", JSON.stringify(action.payload));
      }
      // set the token in local storage
      localStorage.setItem("token", action.payload.token);
      // set the user object in the redux store to the user object
      state.user = JSON.stringify(action.payload);
    },
    /* logout function is used to update the user object in the redux store when the user logs out */
    logout: (state) => {
      // remove the user object and token from local storage and session storage
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      sessionStorage.removeItem("userSession");
      // set the user object in the redux store to null
      state.user = null;
    },
    /* updateUser function is used to update the user object in the redux store when the user updates their first name or last name */
    updateUser: (state, action) => {
      // parse the user object from a string to an object
      const user = JSON.parse(state.user?.toString() || "");
      // update the user object with the new first name and last name
      user.firstName = action.payload.firstName;
      user.lastName = action.payload.lastName;
      // if the user is logged in, set the user object in local storage or session storage to the updated user object
      if (localStorage.getItem("user")) {
        localStorage.setItem("user", JSON.stringify(user));
      }
      if (sessionStorage.getItem("userSession")) {
        sessionStorage.setItem("userSession", JSON.stringify(user));
      }
      // set the user object in the redux store to the updated user object
      state.user = JSON.stringify(user);
    },
  },
});

export const { login, logout, updateUser } = userSlice.actions; // export the login, logout, and updateUser functions

export const selectUser = (state: any) => state.user.user; // export the user object from the redux store

export default userSlice.reducer; // export the userSlice reducer to be used in the redux store
