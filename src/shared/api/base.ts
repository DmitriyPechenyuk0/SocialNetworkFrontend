import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { queryBaseHeaders } from "./header";

export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://10.0.2.2:3000",
        prepareHeaders: queryBaseHeaders,
    }),
    endpoints(build) {
        return {
            firstConnect: build.mutation({
                query: (body) => ({
                    url: "/firstConnect",
                    method: "POST",
                    body,
                }),
            }),
        };
    },
});