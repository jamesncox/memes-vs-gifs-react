import { SET_MEMES, GEN_RANDOM_MEME, CLEAR_MEME } from '../actionTypes'

export default (state = { all: [], randomMeme: null }, action) => {
    switch (action.type) {
        case SET_MEMES:
            return { ...state, all: action.memes }
        case GEN_RANDOM_MEME:
            const randMeme = state.all[Math.floor(Math.random() * state.all.length)]
            return { ...state, randomMeme: randMeme }
        case CLEAR_MEME:
            return { ...state, all: [] }
        default:
            return state
    }
}