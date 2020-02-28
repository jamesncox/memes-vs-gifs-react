import { SET_TOKEN } from '../actionTypes'

export const setToken = (token) => {
    return dispatch => {
        dispatch({ type: SET_TOKEN, payload: token })
    }
}