import {
    SET_USER
} from '../actionTypes'

export function signupUser(user) {
    console.log(user)

    const userObj = {
        username: user.username,
        email: user.email,
        password: user.password
    }

    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-CSRF-Token': 'token'
            },
            body: JSON.stringify(userObj)
        })
            .then(res => res.json())
            .then(savedMeme => dispatch({ type: SET_USER, payload: savedMeme }))
    }
}