import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../shared/api/base'; 
import authReducer from '../modules/registration-authorization/api/auth.slice';

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: authReducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(baseApi.middleware)
});