import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    Link,
    useHistory
} from 'react-router-dom';
import './stylesheets/home.css';
import GifGameCard from './components/GifGameCard'
import MemeGameCard from './components/MemeGameCard'

export default function Home() {

    // is there a way to clear the data with useHistory? Like refresh page does??
    // window.location.reload(false) causes the fetch error to fire and it's not very clean
    // should try writing a reducer that resets state and dispatched here in the redirect functions

    let history = useHistory()

    const redirectToMemeGame = () => {
        history.push('/meme-game')
        window.location.reload(false)
    }

    const redirectToGifGame = () => {
        history.push('/gif-game')
        window.location.reload(false)
    }

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