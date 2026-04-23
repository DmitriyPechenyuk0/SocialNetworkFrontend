import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    token: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setCredentials: (state, action: PayloadAction<{ token: string }>) => {
            state.token = action.payload.token;
            state.isAuthenticated = true;
            AsyncStorage.setItem("token", action.payload.token);
        },
        logOut: (state) => {
            state.token = null;
            state.isAuthenticated = false;
            AsyncStorage.removeItem("token");
        }
    }

})

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;