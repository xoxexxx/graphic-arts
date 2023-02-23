const initialState = {
    canvas: null,
    settings: {
        height: 360,
        width: 200,
        bright: 100,
        contrast: 100,
        saturation: 100,
        grayscale: 0,
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
                settings: {
                    height: action.payload.h,
                    width: action.payload.w,
                    bright: 100,
                    contrast: 100,
                    saturation: 100,
                    grayscale: 0,
                    rotate: 0,
                },
                currentMedia: action.payload.url
            }
        }
        case "BLUE": {
            return {
                ...state,
                settings: {
                    ...state.settings,
                    bright: 135,
                    contrast: 115,
                    saturation: 115,
                    grayscale: 30,
                }
            }
        }
        case "GREYSCALE": {
            return {
                ...state,
                settings: {
                    ...state.settings,
                    bright: 135,
                    contrast: 100,
                    saturation: 65,
                    grayscale: 75,
                }
            }
        }
        case "PURPLE": {
            return {
                ...state,
                settings: {
                    ...state.settings,
                    bright: 135,
                    contrast: 120,
                    saturation: 110,
                    grayscale: 30,
                }
            }
        }
        default: 
            return state
    }
}