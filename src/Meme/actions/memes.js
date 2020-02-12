// action creators
const setMemes = memes => {
    return { type: "SET_MEMES", memes: memes }
}

// async action creators
export const getMemes = () => {
    return async dispatch => {
        try {
            const res = await fetch("https://api.imgflip.com/get_memes")
            if (!res.ok) {
                throw res
            }
            const memeData = await res.json()
            const memeList = memeData.data.memes
            console.log(memeList)
            dispatch(setMemes(memeList))
        } catch (err) {
            // alert("An error occured")
        }
    }
}