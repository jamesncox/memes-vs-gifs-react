import {
    SET_USER
} from '../actionTypes'

export default (state = { user: [] }, action) => {
    switch (action.type) {
        case SET_USER:
            console.log("in reducer", action.user)
            return { ...state, user: action.user }
        default:
            return state
    }
}