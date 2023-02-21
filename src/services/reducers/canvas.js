const initialState = {
    canvas: null,
    settings: {
        height: null,
        width: null,
        bright: 100,
        contrast: 100,
        saturation: 100,
        grayscale: 100,
        rotate: 0,
    },
    currentMedia: null,
    allMedia: []
}
export const canvasMediaSettingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ЯРКОСТЬ": {
            return {
                ...state,
                settings: {
                    ...state.settings,
                    bright: action.payload,
                }
            }
        }
        case "КОНТРАСТ": {
            return {
                ...state,
                settings: {
                    ...state.settings,
                    contrast: action.payload,
                }
                

            }
        }
        case "НАСЫЩЕННОСТЬ": {
            return {
                ...state,
                settings: {
                    ...state.settings,
                    saturation: action.payload,
                }
                
            }
        }
        case "ОТТЕНОК": {
            return {
                ...state,
                settings: {
                    ...state.settings,
                    grayscale: action.payload
                }
               
            }
        }
        case "CURRENT_MEDIA": {
            return {
                ...state,
                currentMedia: action.payload
            }
        }
        default: 
            return state
    }
}