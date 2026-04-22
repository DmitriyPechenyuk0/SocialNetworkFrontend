import { baseApi } from '../../../shared/api/base';
import { AuthResponse, RegistrationRequest } from './api.types';

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<AuthResponse, RegistrationRequest>({
            async queryFn(arg: RegistrationRequest) {
                try {
                    console.log("Дані з форми:", arg.email);
                    
                    await new Promise((resolve) => setTimeout(resolve, 1000));

                    return {
                        data: {
                            token: "fake-token",
                            user: {
                                id: 1,
                                email: arg.email,
                            }
                        }
                    };
                } catch (error) {
                    return { 
                        error: { 
                            status: 500, 
                            data: error instanceof Error ? error.message : "Internal Server Error" 
                        } 
                    };
                }
            }
        })
    }),
    overrideExisting: true,
});

export const { useRegisterMutation } = authApi;