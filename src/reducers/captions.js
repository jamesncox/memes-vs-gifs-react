import {
    LOADING_CAPTIONS,
    SET_CAPTIONS,
    GEN_RANDOM_CAPTIONS_ALL,
    GEN_RANDOM_CAPTIONS_PG,
    GEN_RANDOM_CAPTIONS_R,
    SET_CHOSEN_CAPTION,
    CLEAR_CHOSEN_CAPTION,
    CLEAR_CAPTIONS,
    ADD_SAVED_CAPTION,
    CAPTION_ERRORS,
    CLEAR_CAPTION_ERRORS,
    PREVIEW_CAPTION,
    CLEAR_PREVIEW_CAPTION
} from '../actionTypes'

export default (state = {
    all: [],
    loading: false,
    randomCaptions: null,
    chosenCaption: {},
    captionInput: "",
    errors: null,
    captionPreview: {}
}, action) => {
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
            return { ...state, chosenCaption: {} }

        case CLEAR_CAPTIONS:
            return { all: [] }

        case ADD_SAVED_CAPTION:
            return { ...state, chosenCaption: action.payload }

        case CAPTION_ERRORS:
            return { ...state, errors: action.payload }

        case CLEAR_CAPTION_ERRORS:
            return { ...state, errors: null }

        case PREVIEW_CAPTION:
            return { ...state, captionPreview: action.payload }

        case CLEAR_PREVIEW_CAPTION:
            return { ...state, captionPreview: {} }

        default:
            return state
    }
}