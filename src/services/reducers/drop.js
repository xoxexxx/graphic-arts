import { Action } from "@remix-run/router"


const initialState = {
    drop: false
}

export const dropReducer = (state = initialState, action) => {

    switch (action.type) {
        case "DROP": {
            return {
                ...state,
                drop: action.payload
            }
        }
        default: 
            return state
    }
}