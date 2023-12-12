import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const userReducer = createReducer(initialState, {
  LoginUserRequest: (state) => {
    state.loading = true;
  },
  LoginUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload.user;
    state.message = action.payload.message;
    state.isAuthenticated = true;
  },
  LoginUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  RegisterUserRequest: (state) => {
    state.loading = true;
  },
  RegisterUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload.user;
    state.message = action.payload.message;
    state.isAuthenticated = true;
  },
  RegisterUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  LoadUserRequest: (state) => {
    state.loading = true;
  },
  LoadUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload.user;
    state.message = action.payload.message;
    state.isAuthenticated = true;
  },
  LoadUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  LogoutUserRequest: (state) => {
    state.loading = true;
  },
  LogoutUserSuccess: (state, action) => {
    state.loading = false;
    state.user = null;
    state.message = action.payload.message;
    state.isAuthenticated = false;
  },
  LogoutUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = true;
  },

  clearErrors: (state) => {
    state.error = null;
  },
  clearMessage: (state) => {
    state.message = null;
  },
});
