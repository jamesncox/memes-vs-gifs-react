import { combineReducers } from 'redux'
import gifs from '../reducers/gifs'
import captions from '../reducers/captions'
import memes from '../reducers/memes'

const rootReducer = combineReducers(
    {
        gifs,
        captions,
        memes
    }
)

export default rootReducer