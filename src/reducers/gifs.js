import {
    LOADING_GIFS,
    SET_QUERIED_GIFS,
    GEN_RANDOM_GIF,
    SET_QUERY_INPUT,
    CLEAR_GIF,
    ADD_SAVED_GIF,
    LOADING_SAVED_GIFS,
    SET_SAVED_GIFS
} from '../actionTypes'

export default (state = { all: [], randomGif: null, query: '', savedGifs: [], loading: false }, action) => {
    switch (action.type) {
        case LOADING_GIFS:
            return { ...state, all: [...state.all], loading: true }

        case SET_QUERY_INPUT:
            return { ...state, query: action.payload }

        case SET_QUERIED_GIFS:
            return { ...state, all: action.gifs, loading: false }

        case GEN_RANDOM_GIF:
            const randGif = state.all[Math.floor(Math.random() * state.all.length)]
            return { ...state, randomGif: randGif }

        case CLEAR_GIF:
            return { ...state, randomGif: null }

        case ADD_SAVED_GIF:
            return { ...state, savedGifs: [...state.savedGifs, action.payload] }

        case LOADING_SAVED_GIFS:
            return { ...state, all: [...state.all], loading: true }

        case SET_SAVED_GIFS:
            return { ...state, savedGifs: action.savedGifs, loading: false }

        default:
            return state
    }
}