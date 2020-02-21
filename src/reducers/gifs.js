import { SET_QUERIED_GIFS, GEN_RANDOM_GIF, SET_QUERY_INPUT, CLEAR_GIF } from '../actionTypes'

export default (state = { all: [], randomGif: null, query: '' }, action) => {
    switch (action.type) {
        case SET_QUERY_INPUT:
            return { ...state, query: action.payload }
        case SET_QUERIED_GIFS:
            return { ...state, all: action.gifs }
        case GEN_RANDOM_GIF:
            const randGif = state.all[Math.floor(Math.random() * state.all.length)]
            return { ...state, randomGif: randGif }
        case CLEAR_GIF:
            return { all: [] }
        default:
            return state
    }
}