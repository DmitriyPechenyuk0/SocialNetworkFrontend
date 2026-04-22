export interface RegistrationRequest{
    email: string;
    password: string;
}

export interface User{
    id: number;
    email: string;
}

export interface AuthResponse{
    user: User;
    token: string;
}