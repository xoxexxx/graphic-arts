import { Action } from "@remix-run/router"


const initialState = {
    drop: false,
    drop_: false,
    isProfile: false
}

export const dropReducer = (state = initialState, action) => {

    switch (action.type) {
        case "DROP": {
            return {
                ...state,
                drop: action.payload
            }
        }
        case "DROP_" : {
            return {
                ...state,
                drop_: action.payload
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