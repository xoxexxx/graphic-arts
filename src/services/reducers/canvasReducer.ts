import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    w: 500,
    h: 300,
    currentID: 0
}

const canvasSlice = createSlice({
    name: 'canvasSlice',
    initialState,
    reducers: {
        //@ts-ignore
        addCanvasItem: (state, action) => {
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        },
        selectedItem: (state, action) => {
            return {
                ...state,
                currentID: action.payload 
            }
        },

    }
})

export const {addCanvasItem, selectedItem} = canvasSlice.actions
export const canvasReducer = canvasSlice.reducer