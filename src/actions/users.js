import {
    SET_USER,
    CLEAR_USER
} from '../actionTypes'

export const clearUser = () => {
    return { type: CLEAR_USER }
}

export function signupUser(token, user) {
    return async (dispatch) => {
        try {

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
            dispatch({ type: SET_USER, payload: userObj })
        } catch (err) {
            console.log(err)
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
            if (userObj)
                dispatch({ type: SET_USER, payload: userObj })
        } catch (err) {
            console.log(err)
        }
    }
}