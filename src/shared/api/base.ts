import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ 
        baseUrl: `http://10.0.2.2:8000`,
        //baseUrl: `http://localhost:8000`,
    }),
    endpoints: () => ({}),

})