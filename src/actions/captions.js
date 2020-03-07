import {
    LOADING_CAPTIONS,
    SET_CAPTIONS,
    CLEAR_CAPTIONS,
    ADD_SAVED_CAPTION,
    CAPTION_ERRORS
} from '../actionTypes'

const setCaptions = captions => {
    return { type: SET_CAPTIONS, captions: captions }
}

export const clearCaptions = () => {
    return { type: CLEAR_CAPTIONS }
}

export const getCaptions = () => {
    return async dispatch => {
        dispatch({ type: LOADING_CAPTIONS })
        try {
            const res = await fetch("http://localhost:3000/api/v1/captions")
            if (!res.ok) {
                throw res
            }
            const captionData = await res.json()
            dispatch(setCaptions(captionData))
        } catch (err) {
            alert("Failed to load captions")
        }
    }
}

export function sendSavedCaption(caption) {
    return async (dispatch) => {

        const formData = {
            text: caption.text,
            rating: caption.rating,
            user_id: caption.userId
        }

        const res = await fetch("http://localhost:3000/api/v1/captions", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData),
            credentials: 'include'
        })
        const captionObj = await res.json()
        if (captionObj.errors) {
            dispatch({ type: CAPTION_ERRORS, payload: captionObj.errors })
        } else {
            dispatch({ type: ADD_SAVED_CAPTION, payload: captionObj })
        }
    }
}