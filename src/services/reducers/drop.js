import { Action } from "@remix-run/router"


const initialState = {
    drop: false,
    drop_: false,
    isProfile: false,
    isEdit: false,
    canvasSize: false
}

export const dropReducer = (state = initialState, action) => {

    switch (action.type) {
        case "DROP_MENU": {
            return {
                ...state,
                drop: action.payload
            }
        }
        case "DROP_PROFILE_MENU" : {
            return {
                ...state,
                drop_: action.payload
            }
        }
        case "CANVAS_SIZE_DROP": {
            return {
                ...state,
                canvasSize: action.payload
            }
        }
        default: 
            return state
    }
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "IS_PROFILE": {
            return {
                ...state,
                isProfile: action.payload
            }
        }
        default: 
            return state
    }
}

export const isEditReducer = (state = initialState, action) => {
    switch (action.type) {
        case "EDITOR": {
            return {
                ...state,
                isEdit: action.payload
            }

        }
        default:
                return state
    }
}