import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dropMenu: false,
    dropProfileMenu: false,
    dropCanvasSettingSize: false,
}

const dropSlice = createSlice({
    name: 'dropSlice',
    initialState,
    reducers: {
        dropMenu: (state, action) =>  {
               return {
                ...state,
                dropMenu: action.payload
               } 
        },
        dropProfileMenu: (state,action) => ({
                ...state,
                dropProfileMenu: action.payload
        }),
        dropCanvasSettingSize: (state, action) => ({
                ...state,
                dropCanvasSettingSize: action.payload
            })
    }
})

export const {dropMenu, dropProfileMenu, dropCanvasSettingSize} = dropSlice.actions
export const dropReducer = dropSlice.reducer