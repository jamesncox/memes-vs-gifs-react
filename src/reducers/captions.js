import {
    LOADING_CAPTIONS,
    SET_CAPTIONS,
    GEN_RANDOM_CAPTIONS_ALL,
    GEN_RANDOM_CAPTIONS_PG,
    GEN_RANDOM_CAPTIONS_R,
    SET_CHOSEN_CAPTION,
    CLEAR_CHOSEN_CAPTION,
    CLEAR_CAPTIONS,
    SET_CAPTION_INPUT
} from '../actionTypes'

export default (state = { all: [], loading: false, randomCaptions: null, chosenCaption: [], captionInput: "" }, action) => {
    switch (action.type) {

        case LOADING_CAPTIONS:
            return { ...state, all: [...state.all], loading: true }

        case SET_CAPTIONS:
            return { ...state, all: action.captions, loading: false }

        case GEN_RANDOM_CAPTIONS_ALL:
            const randCaptions = state.all.sort(() => Math.random() - Math.random()).slice(0, 5)
            return { ...state, randomCaptions: randCaptions }

        case GEN_RANDOM_CAPTIONS_PG:
            const captionsPG = Object.values(state.all.filter(c => c.rating === "PG"))
            const randCaptionsPG = captionsPG.sort(() => Math.random() - Math.random()).slice(0, 5)
            return { ...state, randomCaptions: randCaptionsPG }

        case GEN_RANDOM_CAPTIONS_R:
            const captionsR = Object.values(state.all.filter(c => c.rating === "R"))
            const randCaptionsR = captionsR.sort(() => Math.random() - Math.random()).slice(0, 5)
            return { ...state, randomCaptions: randCaptionsR }

        case SET_CHOSEN_CAPTION:
            return { ...state, chosenCaption: action.payload }

        case CLEAR_CHOSEN_CAPTION:
            return { ...state, chosenCaption: [] }

        case CLEAR_CAPTIONS:
            return { all: [] }

        case SET_CAPTION_INPUT:
            return { ...state, captionInput: action.payload }

        default:
            return state
    }
}