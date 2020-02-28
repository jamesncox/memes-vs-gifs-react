import {
    LOADING_MEMES,
    SET_MEMES,
    CLEAR_MEME,
    LOADING_SAVED_MEMES,
    SET_SAVED_MEMES,
    // START_MEME_POST_REQUEST,
    ADD_SAVED_MEME,
    LOAD_SAVED_MEMES
} from '../actionTypes'

export const clearMeme = () => {
    return { type: CLEAR_MEME }
}

// export const loadSavedMemes = () => {
//     return { type: LOAD_SAVED_MEMES }
// }

export const getMemes = () => {
    return async dispatch => {
        dispatch({ type: LOADING_MEMES })
        try {
            const res = await fetch("https://api.imgflip.com/get_memes")
            if (!res.ok) {
                throw res
            }
            const memeData = await res.json()
            const memeList = memeData.data.memes
            dispatch({ type: SET_MEMES, memes: memeList })
        } catch (err) {
            alert("Failed to load memes")
        }
    }
}

export function sendMemeRequest(sendObj) {

    const objData = {
        meme_url: sendObj.memeURL,
        meme_id: sendObj.memeId,
        text: sendObj.captionText,
        caption_id: sendObj.captionId
    }

    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/caption_joins", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(objData)
        })
            .then(res => res.json())
            .then(savedMeme => dispatch({ type: ADD_SAVED_MEME, payload: savedMeme }))
    }
}

export const getSavedMemes = () => {
    return async dispatch => {
        dispatch({ type: LOADING_SAVED_MEMES })
        try {
            const res = await fetch("http://localhost:3000/api/v1/memes")
            if (!res.ok) {
                throw res
            }
            const savedMemeData = await res.json()
            dispatch({ type: SET_SAVED_MEMES, savedMemes: savedMemeData })
        } catch (err) {
            console.log("error fetching saved memes from API")
        }
    }
}