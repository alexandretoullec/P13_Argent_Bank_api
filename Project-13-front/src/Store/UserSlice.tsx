import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const loginUser = createAsyncThunk(
//   "user/loginUser",
//   async (userCredentials) => {
//     const request = await axios.post(
//       `http://localhost:3001/api/v1/user/login`,
//       userCredentials
//     );
//     const response = await request.data;
//     localStorage.setItem("user", JSON.stringify(response));
//     // console.log(response.data.body.token);

//     return response;
//   }
// );

// const loginSlice = createSlice({
//   name: "user",
//   initialState: {
//     loading: false,
//     user: null,
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.user = null;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.error = null;
//         console.log(action);
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.user = null;
//         console.log(action.error.message);
//         if (action.error.message === "Request failed with status code 400") {
//           state.error = "Access Denied! Invalid Credentials ";
//         } else {
//           state.error = action.message;
//         }

//         state.error = null;
//       });
//   },
//   reducers: undefined,
// });

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

export const userReducer = userSlice.reducer;
