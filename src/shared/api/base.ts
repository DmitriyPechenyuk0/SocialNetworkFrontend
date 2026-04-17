import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { queryBaseHeaders } from "./header";

export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
        prepareHeaders: queryBaseHeaders,
    }),
    endpoints(build) {
        return {};
    },
});