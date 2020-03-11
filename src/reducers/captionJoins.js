import {
    DELETE_CAPTION_JOIN
} from '../actionTypes'

export default (state = { captionJoin: null }, action) => {
    switch (action.type) {
        case DELETE_CAPTION_JOIN:
            return { captionJoin: action.payload }
        default:
            return state
    }
}