import {
    LOADING_MEMES,
    SET_MEMES,
    CLEAR_MEME,
    LOADING_SAVED_MEMES,
    SET_SAVED_MEMES,
    START_MEME_POST_REQUEST,
    SEND_SAVED_MEME
} from '../actionTypes'

const setMemes = memes => {
    return { type: SET_MEMES, memes: memes }
}

const setSavedMemes = savedMemes => {
    return { type: SET_SAVED_MEMES, savedMemes: savedMemes }
}

// const sendMeme = payload => {
//     console.log("inside sendMeme", payload)
//     return { type: SEND_SAVED_MEME, payload: payload }
// }

export const clearMeme = () => {
    return { type: CLEAR_MEME }
}

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
            dispatch(setMemes(memeList))
        } catch (err) {
            alert("Failed to load memes")
        }
    }
}

export function sendMemeRequest(sendObj) {
    return (dispatch) => {
        const url = sendObj.sendObj.url
        const memeId = sendObj.sendObj.memeId
        const caption = sendObj.sendObj.caption
        const captionId = sendObj.sendObj.captionId
        const data = { url, memeId, caption, captionId }

        return fetch("http://localhost:3000/api/v1/caption_joins", {
            method: "POST",
            body: JSON.stringify(data),
            contentType: false
        })
            .then(res => res.json())
            .then(sendObj => dispatch({ type: SEND_SAVED_MEME, sendObj }))
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
            dispatch(setSavedMemes(savedMemeData))
        } catch (err) {
            console.log("error fetching saved memes from API")
        }
    }
}