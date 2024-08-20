import React from 'react';
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../users/authSlice";
import { AuthApi } from '../api/AuthApi';

const store = configureStore({
    reducer:{
        [AuthApi.reducerPath]: AuthApi.reducer,
        registration: authSlice
    },
    devTools: import.meta.env.MODE !== "production",
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(AuthApi.middleware)
})

export default store;