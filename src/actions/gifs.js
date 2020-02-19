import { SET_QUERIED_GIFS, GEN_RANDOM_GIF } from '../actionTypes'

const setQueriedGifs = gifs => {
    return { type: SET_QUERIED_GIFS, gifs: gifs }
}

export const getQueriedGifs = () => {
    return async (dispatch, getState) => {
        const state = getState()

        const query = state.gifs.query

        try {
            const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=1CJODjx6MEE4K7eoCjXUuNsLU7aVy5Ut&q=${query}&limit=25&offset=0&rating=R&lang=en`)
            if (!res.ok) {
                throw res
            }
            const giphyData = await res.json()
            const giphySearchResults = giphyData.data
            dispatch(setQueriedGifs(giphySearchResults))
            dispatch({ type: GEN_RANDOM_GIF })
        } catch (err) {
            // alert("An error occured"
        }
    }
}