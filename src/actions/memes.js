import {
    LOADING_MEMES,
    SET_MEMES,
    CLEAR_MEME,
    LOADING_SAVED_MEMES,
    SET_SAVED_MEMES,
    SEND_SAVED_MEME
} from '../actionTypes'

const setMemes = memes => {
    return { type: SET_MEMES, memes: memes }
}

const setSavedMemes = savedMemes => {
    return { type: SET_SAVED_MEMES, savedMemes: savedMemes }
}

const sendMeme = payload => {
    console.log("inside sendMeme", payload)
    return { type: SEND_SAVED_MEME, payload: payload }
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

export const sendMemeRequest = (payload) => {
    console.log("inside sendMemeRequest", payload)

    // const payload = () => {

    // }

    return dispatch => {
        return fetch("http://localhost:3000/api/v1/saved-memes", {
            method: "POST",
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ payload: payload })
        })
            .then(response => response.json())
            .then(payload => {
                dispatch(sendMeme(payload))
            })
    }
}


// export const createMedication = medication => {
//     return dispatch => {
//       return fetch(`${API_URL}/medications`, {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({medication: medication})
//       })
//         .then(response => response.json())
//         .then(medication => {
//           dispatch(addMedication(medication))
//           dispatch(resetMedicationForm())
//         })
//         .catch(error => console.log(error))
//     };
//   }

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

// export const saveMeme = () => {
//     return async dispatch => {
//         const res = await fetch("http://localhost:3000/api/v1/saved-memes")
//         method: 'POST'
//         headers: {
//             'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//         }

//     }
// }