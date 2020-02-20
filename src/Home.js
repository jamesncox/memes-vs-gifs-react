import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    Link,
    useHistory
} from 'react-router-dom';
import GifGameCard from './components/GifGameCard'
import MemeGameCard from './components/MemeGameCard'
import { connect } from 'react-redux'
import { CLEAR_MEME } from './actionTypes'

class Home extends Component {

    // let history = useHistory()

    // const redirectToMemeGame = () => {
    //     history.push('/meme-game')
    //     // window.location.reload(false)
    // }

    // const redirectToGifGame = () => {
    //     history.push('/gif-game')
    //     // window.location.reload(false)
    // }

    render() {
        return (
            <Router>
                <div>
                    <h1 className="header">Memes Vs. Gifs</h1>
                    <MemeGameCard handleNav={redirectToMemeGame} />
                    <GifGameCard handleNav={redirectToGifGame} />
                </div>
            </Router>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    clearMeme: () => dispatch({ type: CLEAR_MEME })
})

export default connect(null, mapDispatchToProps)(Home)