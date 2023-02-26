const initialState = {
    items: [],
        w: null,
        h: null
}
export const canvasReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CANVAS_ITEM": {
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        }
        case "CANVAS_WIDTH": {
            return {
                ...state,
                    w: action.payload,
            }
        }
        case "CANVAS_HEIGHT": {
            return {
                ...state,
                    h: action.payload
            }
        }
        default: 
            return state
    }
}