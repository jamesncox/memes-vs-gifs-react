import {
    LOADING_MEMES,
    SET_MEMES,
    GEN_RANDOM_MEME,
    CLEAR_MEME,
    ADD_SAVED_MEME,
    LOADING_SAVED_MEMES,
    SET_SAVED_MEMES,
    DELETE_MEME
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
            return { ...state, randomMeme: null }

        case ADD_SAVED_MEME:
            console.log(action.payload)
            return { ...state, savedMemes: [...state.savedMemes, action.payload] }

        case LOADING_SAVED_MEMES:
            return { ...state, all: [...state.all], loading: true }

        case SET_SAVED_MEMES:
            return { ...state, savedMemes: action.savedMemes, loading: false }

        case DELETE_MEME:
            const persistedMemes = state.savedMemes.filter(meme => meme.id !== action.payload)
            return { ...state, savedMemes: persistedMemes }

        default:
            return state
    }
}