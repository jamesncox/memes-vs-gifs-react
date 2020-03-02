import {
    SET_USER,
    CLEAR_USER
} from '../actionTypes'

export default (state = { user: {} }, action) => {
    switch (action.type) {

        case SET_USER:
            console.log("in reducer", action.payload)
            return { ...state, user: action.payload }

        case CLEAR_USER:
            return { ...state, user: {} }

        default:
            return state
    }
}