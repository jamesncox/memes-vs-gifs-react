import {
    LOADING_MEMES,
    SET_MEMES,
    CLEAR_MEME,
    LOADING_SAVED_MEMES,
    SET_SAVED_MEMES,
    ADD_SAVED_MEME,
    DELETE_MEME
} from '../actionTypes'

const setSavedMemes = savedMemes => {
    return { type: SET_SAVED_MEMES, savedMemes: savedMemes }
}

const setMemes = memes => {
    return { type: SET_MEMES, memes: memes }
}

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

    const objData = {
        meme_url: sendObj.memeURL,
        meme_id: sendObj.memeId + Math.ceil(Math.random() * 10),
        text: sendObj.captionText,
        caption_id: sendObj.captionId,
        user_id: sendObj.userId,
        username: sendObj.username
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
            dispatch(setSavedMemes(savedMemeData))
        } catch (err) {
            alert("There was a problem loading everyone's saved memes")
        }
    }
}

export function deleteMeme(id) {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/memes/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(meme => dispatch({ type: DELETE_MEME, payload: meme.id }))
    }
}