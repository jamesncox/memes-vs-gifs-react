import {
    SET_USER,
    CLEAR_USER,
    USER_ERRORS
} from '../actionTypes'

export default (state = { user: {}, errors: [] }, action) => {
    switch (action.type) {

        case SET_USER:
            console.log("in reducer", action.payload)
            return { ...state, user: action.payload }

        case CLEAR_USER:
            return { ...state, user: {} }

        case USER_ERRORS:
            const errors = state.users.errors
            return { ...state, errors: errors }

        default:
            return state
    }
}