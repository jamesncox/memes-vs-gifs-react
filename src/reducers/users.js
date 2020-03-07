import {
    SET_USER,
    USER_ERRORS,
    CLEAR_USER,
    CLEAR_ERRORS,
    LOGGED_IN,
    LOGGED_OUT
} from '../actionTypes'

export default (state = { user: {}, errors: [], loggedIn: false }, action) => {
    switch (action.type) {

        case SET_USER:
            return { ...state, user: action.payload }

        case LOGGED_IN:
            return { ...state, loggedIn: action.payload }

        case LOGGED_OUT:
            return { ...state, loggedIn: false }

        case USER_ERRORS:
            // console.log(action.payload)
            return { ...state, errors: action.payload }

        case CLEAR_USER:
            return { ...state, user: {} }

        case CLEAR_ERRORS:
            return { ...state, errors: [] }

        default:
            return state
    }
}