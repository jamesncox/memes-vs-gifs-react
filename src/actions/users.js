import {
    SET_USER,
    CLEAR_USER,
    USER_ERRORS,
    CLEAR_ERRORS
} from '../actionTypes'

export const clearUser = () => {
    return { type: CLEAR_USER }
}

export const clearErrors = () => {
    return { type: CLEAR_ERRORS }
}

export function signupUser(token, user) {
    return async (dispatch) => {
        const formData = {
            user: {
                username: user.username,
                email: user.email,
                password: user.password,
                password_confirmation: user.password_confirmation
            }
        }

        const res = await fetch("https://memes-vs-gifs.herokuapp.com/api/v1/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': token
            },
            body: JSON.stringify(formData),
            credentials: 'include'
        })

        const userObj = await res.json()
        if (userObj.errors) {
            dispatch({ type: USER_ERRORS, payload: userObj.errors })
        } else {
            dispatch({ type: SET_USER, payload: userObj })
        }
    }
}

export function loginUser(user) {
    return async (dispatch, getState) => {
        const formData = {
            user: {
                username: user.username,
                password: user.password
            }
        }

        const state = getState()
        const token = state.sessions.token

        const res = await fetch("https://memes-vs-gifs.herokuapp.com/api/v1/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': token
            },
            body: JSON.stringify(formData),
            credentials: 'include'
        })
        const userObj = await res.json()
        if (userObj.errors) {
            dispatch({ type: USER_ERRORS, payload: userObj.errors })
        } else {
            dispatch({ type: SET_USER, payload: userObj })
        }
    }
}

export function setCurrentUser() {
    return async (dispatch) => {
        try {
            const res = await fetch("https://memes-vs-gifs.herokuapp.com/api/v1/current_user", {
                credentials: 'include'
            })
            if (!res.ok) {
                throw res
            }
            const userObj = await res.json()
            dispatch({ type: SET_USER, payload: userObj })
        } catch (err) {
            console.log(err)
        }
    }
}

export function clearCurrentUser() {
    return async (dispatch, getState) => {

        const state = getState()
        const token = state.sessions.token

        const res = await fetch("https://memes-vs-gifs.herokuapp.com/api/v1/logout", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': token
            },
            credentials: 'include'
        })
        if (!res.ok) {
            throw res
        }
        dispatch({ type: CLEAR_USER })
    }
}