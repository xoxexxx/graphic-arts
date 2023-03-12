import {FETCH_AUTH_REQUEST, FETCH_AUTH_SUCCESS, DROP_MENU } from './types'


export const showMenu = (state) => {
    return {
        type: DROP_MENU,
        payload: !state
    }
}

export const fetchAuthReqAsync = (usr) => {
    return {
        type: FETCH_AUTH_REQUEST,
        payload: usr 
    }
}

export const fillUsr = (usr) => {
    return {
        type: FETCH_AUTH_SUCCESS,
        payload: usr
    }
}