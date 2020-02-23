import { SET_MEMES, CLEAR_MEME, SET_SAVED_MEMES } from '../actionTypes'

const setMemes = memes => {
    return { type: SET_MEMES, memes: memes }
}

const setSavedMemes = savedMemes => {
    return { type: SET_SAVED_MEMES, savedMemes: savedMemes }
}

export const clearMeme = () => {
    return { type: CLEAR_MEME }
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
            alert("Failed to load memes")
        }
    }
}

export const getSavedMemes = () => {
    return async dispatch => {
        try {
            const res = await fetch("http://localhost:3000/api/v1/memes")
            if (!res.ok) {
                throw res
            }
            const savedMemeData = await res.json()
            console.log(savedMemeData)
            dispatch(setSavedMemes(savedMemeData))
        } catch (err) {
            console.log("error fetching saved memes from API")
        }
    }
}