import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './stylesheets/home.css';
import NavBar from './components/NavBar'
import GifGameCard from './components/GifGameCard'
import MemeGameCard from './components/MemeGameCard'
import MemeHome from './Meme/components/MemeHome'
import GifHome from './Gif/components/GiphyHome'
import Home from './Home'

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Switch>
          <Route path="/meme-game">
            <MemeHome />
          </Route>
          <Route path="/gif-game">
            <GifHome />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}
