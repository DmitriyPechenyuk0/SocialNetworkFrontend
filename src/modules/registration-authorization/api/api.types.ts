export interface RegisterRequest {
    email: string;
    password: string;
}

export interface AuthRequest {
    email: string;
    password: string;
}

export interface AccessTokenResponse {
    accessToken: string;
}

export interface VerifyRequest {
    email: string;
    code: string;
}

export interface AuthResponse {
    refreshToken: string;
}

export interface RefreshRequest {
    refreshToken: string;
}