import {
    SET_USER,
    SET_ERRORS
} from '../actionTypes'

export default (state = { user: [], errors: [] }, action) => {
    switch (action.type) {

        case SET_USER:
            console.log("in reducer", action.payload)
            return { ...state, user: action.payload }

        case SET_ERRORS:
            return { ...state, errors: action.payload }

        default:
            return state
    }
}