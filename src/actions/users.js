import {
    SET_USER,
    LOGGED_IN,
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

export const logOutUser = () => {
    return { type: LOGGED_IN, payload: false }
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

        const res = await fetch("http://localhost:3000/api/v1/signup", {
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
            dispatch({ type: LOGGED_IN, payload: true })
        }
    }
}

export function loginUser(user) {
    return async (dispatch, getState) => {
        try {
            const formData = {
                user: {
                    username: user.username,
                    password: user.password
                }
            }

            const state = getState()
            const token = state.sessions.token

            const res = await fetch("http://localhost:3000/api/v1/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': token
                },
                body: JSON.stringify(formData),
                credentials: 'include'
            })
            if (!res.ok) {
                throw res
            }
            const userObj = await res.json()
            if (userObj.errors) {
                dispatch({ type: USER_ERRORS, payload: userObj.errors })
            } else {
                dispatch({ type: SET_USER, payload: userObj })
                dispatch({ type: LOGGED_IN, payload: true })
            }
        } catch (err) {
            alert(err)
        }
    }
}

export function setCurrentUser() {
    return async (dispatch) => {
        try {
            const res = await fetch("http://localhost:3000/api/v1/current_user", {
                credentials: 'include'
            })
            if (!res.ok) {
                throw res
            }
            const userObj = await res.json()
            dispatch({ type: SET_USER, payload: userObj })
            dispatch({ type: LOGGED_IN, payload: true })
        } catch (err) {
            alert(err)
        }
    }
}

export function clearCurrentUser() {
    return async (dispatch, getState) => {

        const state = getState()
        const token = state.sessions.token

        const res = await fetch("http://localhost:3000/api/v1/logout", {
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