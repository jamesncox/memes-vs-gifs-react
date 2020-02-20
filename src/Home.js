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

    let history = useHistory()

    const redirectToMemeGame = () => {
        history.push('/meme-game')
    }

    const redirectToGifGame = () => {
        history.push('/gif-game')
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