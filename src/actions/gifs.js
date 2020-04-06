import {
    LOADING_GIFS,
    SET_QUERIED_GIFS,
    GEN_RANDOM_GIF,
    CLEAR_GIF,
    LOADING_SAVED_GIFS,
    ADD_SAVED_GIF,
    SET_SAVED_GIFS,
    DELETE_GIF
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
            const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=M7cQmyffxGCB7LHSmI1OGrT6Tnc9pZDn&q=${query}&limit=25&offset=0&rating=R&lang=en`)
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

export function sendGifRequest(sendObj) {

    const objData = {
        gif_url: sendObj.gifURL,
        gif_id: sendObj.gifId,
        text: sendObj.captionText,
        caption_id: sendObj.captionId,
        user_id: sendObj.userId,
        username: sendObj.username
    }

    return (dispatch) => {
        fetch("https://memes-vs-gifs-api.herokuapp.com/api/v1/caption_joins", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(objData)
        })
            .then(res => res.json())
            .then(savedGif => dispatch({ type: ADD_SAVED_GIF, payload: savedGif }))
    }
}

export const getSavedGifs = () => {
    return async dispatch => {
        dispatch({ type: LOADING_SAVED_GIFS })
        try {
            const res = await fetch("https://memes-vs-gifs-api.herokuapp.com/api/v1/gifs")
            if (!res.ok) {
                throw res
            }
            const savedGifData = await res.json()
            dispatch(setSavedGifs(savedGifData))
        } catch (err) {
            alert("There was a problem loading everyone's saved gifs")
        }
    }
}

export function deleteGif(id) {
    return (dispatch) => {
        fetch(`https://memes-vs-gifs-api.herokuapp.com/api/v1/gifs/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(gif => dispatch({ type: DELETE_GIF, payload: gif.id }))
    }
}