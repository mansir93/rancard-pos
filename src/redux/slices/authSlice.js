import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  // access: typeof window !== "undefined" ? window.localStorage.getItem('access') : false, help online
  isAuthenticated: !!localStorage.getItem("user"),
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      if (username === "admin" && password === "password") {
        state.user = { username };
        state.isAuthenticated = true;
        state.error = null;
        localStorage.setItem("user", JSON.stringify(state.user));
      } else {
        state.error = "Invalid credentials";
      }
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
