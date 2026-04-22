import { baseApi } from '../../../shared/api/base';
import type { 
    RegisterRequest, 
    AuthRequest, 
    VerifyRequest, 
    AuthResponse, 
    RefreshRequest, 
    AccessTokenResponse
} from "./api.types";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<void, RegisterRequest>({
            query: (body) => ({
                url: '/register',
                method: 'POST',
                body,
            }),
        }),

        verifyEmail: builder.mutation<AuthResponse, VerifyRequest>({
            query: (body) => ({
                url: '/email-verification',
                method: 'POST',
                body,
            }),
        }),

        login: builder.mutation<AuthResponse, AuthRequest>({
            query: (body) => ({
                url: '/login',
                method: 'POST',
                body,
            }),
        }),

        refreshAccessToken: builder.mutation<AccessTokenResponse, RefreshRequest>({
            query: (body) => ({
                url: '/refresh',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { 
    useRegisterMutation, 
    useVerifyEmailMutation, 
    useLoginMutation,
    useRefreshAccessTokenMutation 
} = authApi;