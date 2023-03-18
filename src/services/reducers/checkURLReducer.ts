import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isProfile: false,
    isEditor: false,
}

const checkURLSlice = createSlice({
    name: "chechURLSlice",
    initialState,
    reducers: {
        isProfile: (state, action) => {
            return {
                ...state,
                isProfile: action.payload
            }
        },
        isEditor: (state, action) => {
            return {
                ...state,
                isEditor: action.payload
            }
        }
    }
})

export const {isProfile, isEditor} = checkURLSlice.actions
export const checkReducer = checkURLSlice.reducer