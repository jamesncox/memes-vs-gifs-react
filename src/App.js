import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './stylesheets/app.css';
import NavBar from './components/NavBar'
import MemeHome from './Meme/components/MemeHome'
import GifHome from './Gif/components/GiphyHome'
import Home from './Home'

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        {/* refactor the routes to send history props */}
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
