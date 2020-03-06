import { SET_TOKEN } from '../actionTypes'

const setToken = (token) => {
    return dispatch => {
        // console.log("inside session action", token)
        dispatch({ type: SET_TOKEN, payload: token })
    }
}

export function getToken() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/auth-check')
            .then(res => res.json())
            .then(token => dispatch(setToken(token.csrf_auth_token)))
    }
}