import {
    SET_MEMES,
    GEN_RANDOM_MEME,
    CLEAR_MEME,
    SET_SAVED_MEMES,
    LOADING_MEMES
} from '../actionTypes'

export default (state = { all: [], randomMeme: null, savedMemes: [], loading: false }, action) => {
    switch (action.type) {
        case LOADING_MEMES:
            return { ...state, all: [...state.all], loading: true }

        case SET_MEMES:
            return { ...state, all: action.memes }

        case GEN_RANDOM_MEME:
            const randMeme = state.all[Math.floor(Math.random() * state.all.length)]
            return { ...state, randomMeme: randMeme }

        case CLEAR_MEME:
            return { all: [] }

        case SET_SAVED_MEMES:
            return { ...state, savedMemes: action.savedMemes }

        default:
            return state
    }
}