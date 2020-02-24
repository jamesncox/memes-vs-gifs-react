import {
    LOADING_GIFS,
    SET_QUERIED_GIFS,
    GEN_RANDOM_GIF,
    CLEAR_GIF,
    LOADING_SAVED_GIFS,
    SET_SAVED_GIFS
} from '../actionTypes'

const setQueriedGifs = gifs => {
    return { type: SET_QUERIED_GIFS, gifs: gifs }
}

const setSavedGifs = savedGifs => {
    return { type: SET_SAVED_GIFS, savedGifs: savedGifs }
}

export const clearGif = () => {
    return { type: CLEAR_GIF }
}

export const getQueriedGifs = () => {
    return async (dispatch, getState) => {
        const state = getState()

        const query = state.gifs.query
        dispatch({ type: LOADING_GIFS })

        try {
            const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=1CJODjx6MEE4K7eoCjXUuNsLU7aVy5Ut&q=${query}&limit=25&offset=0&rating=R&lang=en`)
            if (!res.ok) {
                throw res
            }
            const giphyData = await res.json()
            const giphySearchResults = giphyData.data
            dispatch(setQueriedGifs(giphySearchResults))
            dispatch({ type: GEN_RANDOM_GIF })
        } catch (err) {
            alert("Failed to load gifs")
        }
    }
}

export const getSavedGifs = () => {
    return async dispatch => {
        dispatch({ type: LOADING_SAVED_GIFS })
        try {
            const res = await fetch("http://localhost:3000/api/v1/gifs")
            if (!res.ok) {
                throw res
            }
            const savedGifData = await res.json()
            console.log(savedGifData)
            dispatch(setSavedGifs(savedGifData))
        } catch (err) {
            console.log("error fetching saved memes from API")
        }
    }
}