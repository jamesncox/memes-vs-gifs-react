import {
    LOADING_CAPTIONS,
    SET_CAPTIONS,
    CLEAR_CAPTIONS,
    ADD_SAVED_CAPTION
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

export function sendSavedCaption(captionObj) {
    console.log(captionObj)

    const objData = {
        text: captionObj.text,
        rating: captionObj.rating
    }

    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/captions", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(objData)
        })
            .then(res => res.json())
            .then(savedCaption => dispatch({ type: ADD_SAVED_CAPTION, payload: savedCaption }))
    }
}

// caption (Post) including only the id of saved caption