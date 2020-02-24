import { SET_CAPTIONS, CLEAR_CAPTIONS, LOADING_CAPTIONS } from '../actionTypes'

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

// caption (Post) including only the id of saved caption