import { configureStore } from "@reduxjs/toolkit";
import Cookies from "js-cookie"; // Import the js-cookie library
import { api } from "./api/apiSlice";
import authReducer from "./features/auth/authSlice";

// Check if user data is in cookies
const storedCandidateUser = Cookies.get("candidate");
const storedEmployeeUser = Cookies.get("employee");

const initialState = {
  auth: {
    user: storedCandidateUser
      ? JSON.parse(storedCandidateUser)
      : storedEmployeeUser
      ? JSON.parse(storedEmployeeUser)
      : null,
  },
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [api.reducerPath]: api.reducer,
  },
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
