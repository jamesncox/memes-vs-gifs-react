import { SET_CAPTIONS } from '../actionTypes'

const setCaptions = captions => {
    return { type: SET_CAPTIONS, captions: captions }
}

export const getCaptions = () => {
    return async dispatch => {
        try {
            const res = await fetch("http://localhost:3000/captions")
            if (!res.ok) {
                throw res
            }
            const captionData = await res.json()
            dispatch(setCaptions(captionData))
        } catch (err) {
            // alert("Failed to load captions")
        }
    }
}