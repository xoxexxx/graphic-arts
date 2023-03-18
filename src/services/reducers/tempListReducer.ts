import { createSlice } from '@reduxjs/toolkit';
import { socialTemplate, businessTemplate, printTemplate, standartTemplate, marketingTemplate } from "../../utils/objects/templates";
const initialState = {
    data: null
}

const templateListSlice = createSlice({
    name: 'templateListSlice',
    initialState,
    reducers: {
        //@ts-ignore
        social: () => ({data: socialTemplate}),
        //@ts-ignore
        business: () => ({data: businessTemplate}),
        //@ts-ignore
        print: () => ({data: printTemplate}),
        //@ts-ignore
        standart: () => ({data: standartTemplate}),
        //@ts-ignore
        marketing: () => ({data: marketingTemplate}),
        
    }
})

export const {social, business, print, standart, marketing} = templateListSlice.actions
export const templateReducer = templateListSlice.reducer