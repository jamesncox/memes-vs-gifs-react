import {
    SET_USER,
    USER_ERRORS,
    CLEAR_USER,
    CLEAR_ERRORS
} from '../actionTypes'

export default (state = { user: {}, errors: [] }, action) => {
    switch (action.type) {

        case SET_USER:
            return { ...state, user: action.payload }

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