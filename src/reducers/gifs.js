import { SET_QUERIED_GIFS, GEN_RANDOM_GIF, SET_QUERY_INPUT, CLEAR_GIF, SET_SAVED_GIFS } from '../actionTypes'

export default (state = { all: [], randomGif: null, query: '', savedGifs: [] }, action) => {
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

        case SET_SAVED_GIFS:
            return { ...state, savedGifs: action.savedGifs }

        default:
            return state
    }
}