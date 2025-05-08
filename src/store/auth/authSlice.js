import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', // 'authenticated', 'not-authenticated'
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login:(state,{payload})=>{
            state.status = 'authenticated'; // 'authenticated', 'not-authenticated'
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null; // Clear any previous error message
        },
        logout:(state,action)=>{
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = action.payload?.errorMessage || null;
        },
        checkingCredentials:(state)=>{
            state.status = 'checking';
        },
    }
});
// Action creators are generated for each case reducer function
export const { login,logout,checkingCredentials } = authSlice.actions;