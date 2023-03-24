import {createSlice} from '@reduxjs/toolkit';


export interface IState {
    isProfile: boolean,
    isEditor: boolean,
    isEditFilters: boolean, 
}

const initialState: IState = {
    isProfile: false,
    isEditor: false,
    isEditFilters: false,
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
        },

    filterEditHandle: (state, action) => {
        return {
            ...state,
            isEditFilters: action.payload
        }  
    }   
    }
})

export const {isProfile, isEditor, filterEditHandle} = checkURLSlice.actions
export const checkReducer = checkURLSlice.reducer