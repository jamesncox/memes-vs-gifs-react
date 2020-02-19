import { SET_MEMES } from '../actionTypes'

const setMemes = memes => {
    return { type: SET_MEMES, memes: memes }
}

export const getMemes = () => {
    return async dispatch => {
        try {
            const res = await fetch("https://api.imgflip.com/get_memes")
            if (!res.ok) {
                throw res
            }
            const memeData = await res.json()
            const memeList = memeData.data.memes
            dispatch(setMemes(memeList))
        } catch (err) {
            alert("An error occured")
        }
    }
}