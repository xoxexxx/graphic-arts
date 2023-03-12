import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    hasError: false,
    isLogin: false,
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        fetchAuthRequest: (state) => {
            return {
                ...state,
                isLoading: true,
                hasError: false,
                isLogin: true,
            }
        },
        fetchAuthSuccess: (state) => {
            return {
                ...state,
                isLoading: false,
                hasError: false,
                isLogin: true,
            }
        },
        fetchAuthError: (state) => {
            return {
                ...state,
                isLoading: false,
                hasError: true,
                isLogin: true,
              };
        }
    }
})

export const {fetchAuthRequest, fetchAuthSuccess, fetchAuthError} = authSlice.actions
export const authReducer = authSlice.reducer