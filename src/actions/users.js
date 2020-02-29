import {
    SET_USER
} from '../actionTypes'

export function signupUser(user) {
    console.log("in action, the user obj sending to DB is ", user)
    return async (dispatch, getState) => {

        const userObj = {
            username: user.username,
            email: user.email,
            password: user.password
        }

        const state = getState()
        const token = state.sessions.token
        console.log(token)

        fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'X-CSRF-TOKEN': token
            },
            body: JSON.stringify(userObj)
            // credentials: 'include'
        })
            .then(res => res.json())
            .then(savedUser => dispatch({ type: SET_USER, payload: savedUser }))
    }
}