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
            return { all: [] }

        // case START_MEME_POST_REQUEST:
        //     return { ...state, sendMeme: [...state.sendMeme] }

        // ADD_SAVED_MEME is the action I will use to display all the saved memes 
        // in SavedMemes.js because it will be updated by each post request
        case ADD_SAVED_MEME:
            console.log(action.payload)
            return { ...state, savedMemes: action.payload, loading: false }

        case LOADING_SAVED_MEMES:
            return { ...state, all: [...state.all], loading: true }

        // SET_SAVED_MEMES is a temporary action I call on render of SavedMemes.js
        // but it's not necessary. ADD_SAVED_MEME will populate savedMemes array when my
        // post request is working and updating savedMemes state
        case SET_SAVED_MEMES:
            return { ...state, savedMemes: action.savedMemes, loading: false }

        default:
            return state
    }
}