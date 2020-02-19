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
import NavBar from './components/NavBar'
import GifGameCard from './components/GifGameCard'
import MemeGameCard from './components/MemeGameCard'
import MemeHome from './Meme/components/MemeHome'
import GifHome from './Gif/components/GiphyHome'

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
                <h1>Memes Vs. Gifs</h1>
                <MemeGameCard handleNav={redirectToMemeGame} />
                <GifGameCard handleNav={redirectToGifGame} />
            </div>
        </Router>
    );
}