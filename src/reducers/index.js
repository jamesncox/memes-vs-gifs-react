import { combineReducers } from 'redux'
import gifs from '../reducers/gifs'
import captions from '../reducers/captions'
import memes from '../reducers/memes'
import users from '../reducers/users'

const rootReducer = combineReducers(
    {
        gifs,
        captions,
        memes,
        users
    }
)

export default rootReducer