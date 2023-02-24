import { socialTemp, businessTemp, printTemp, standartTemp, marketingTemp } from "../../utils/templates/main-templates";
const initialState = {
    data: null
}

export const templateListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SOCIAL": {
            return {
                ...state,
                data: socialTemp
            }
        }
        case "BUSINESS": {
            return {
                ...state,
                data: businessTemp
            }
        }
        case "PRINT": {
            return {
                ...state,
                data: printTemp
            }
        }
        case "STANDART": {
            return {
                ...state,
                data: standartTemp
            }
        }
        case "MARKETING": {
            return {
                ...state,
                data: marketingTemp
            }
        }
        case "NULL": {
            return {
                ...state,
                data: null
            }
        }
        default: 
            return state
    }
}

