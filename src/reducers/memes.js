import {
    LOADING_MEMES,
    SET_MEMES,
    GEN_RANDOM_MEME,
    CLEAR_MEME,
    // START_MEME_POST_REQUEST,
    ADD_SAVED_MEME,
    LOADING_SAVED_MEMES,
    SET_SAVED_MEMES
} from '../actionTypes'

export default (state = { all: [], randomMeme: null, sendMeme: [], savedMemes: [], loading: false }, action) => {
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

        // ADD_SAVED_MEME is the action called by my Meme post request
        // Need to refactor to update the store, call the method every time a meme is saved
        case ADD_SAVED_MEME:
            console.log(action.payload)
            return { ...state, savedMemes: [...state.savedMemes, action.payload] }

        // LOADING_SAVED_MEMES needs to be called on App componentDidMount with initial load of all memes from DB
        // Then every time ADD_SAVED_MEME action is fired, will add a new saved meme to savedMemes array
        case LOADING_SAVED_MEMES:
            return { ...state, loading: true }

        case SET_SAVED_MEMES:
            return { ...state, savedMemes: action.savedMemes, loading: false }

        default:
            return state
    }
}