import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
    templates: false,
    media: false,
    text: false,
    figure: false,
    current: null,
    currentMenu: null,
  }

export type EditorMenuState = {
    templates: boolean,
    media: boolean,
    text: boolean,
    figure: boolean,
    current: string | null,
    currentMenu: string | null,
}

const menuEditorSlice = createSlice({
    name: 'menuEditorSlice',
    initialState,
    reducers: {
        //@ts-ignore
        hidden: () => {
            return {
                templates: false,
                media: false,
                text: false,
                figure: false,
                currentMenu: null,
                current: null,
            }
        },
        //@ts-ignore
        templates: () =>  {
            return {
                templates: true,
                media: false,
                text: false,
                figure: false,
                currentMenu: "TEMPLATES",
                current: "TEMPLATES",
              };
        },
        //@ts-ignore
        media: () => {
            return {
                templates: false,
                media: true,
                text: false,
                figure: false,
                currentMenu: "MEDIA",
                current: "MEDIA",
              };
        },
        //@ts-ignore
        text: () => {
            return {
                templates: false,
                media: false,
                text: true,
                figure: false,
                currentMenu: "TEXT",
                current: "TEXT",
              };
        },
        //@ts-ignore
        figure: () => {
            return {
                templates: false,
                media: false,
                text: false,
                figure: true,
                currentMenu: "FIGURE",
                current: "FIGURE",
              };
        }
    }
})

export const {hidden, templates, media, text, figure} = menuEditorSlice.actions
export const menuEditorReducer = menuEditorSlice.reducer