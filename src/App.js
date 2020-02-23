import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './stylesheets/app.css';
import NavBar from './components/NavBar'
import MemeHome from './Meme/components/MemeHome'
import GifHome from './Gif/components/GiphyHome'
import Home from './Home'
import SavedMemes from './components/SavedMemes'
import SavedGifs from './components/SavedGifs'
import UserProfile from './User/UserProfile'
import { connect } from 'react-redux';
import { getSavedMemes } from './actions/memes'

class App extends Component {

  componentDidMount() {
    // this.props.getSavedMemes()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/meme-game">
              <MemeHome />
            </Route>
            <Route path="/gif-game">
              <GifHome />
            </Route>
            <Route path="/saved-memes">
              <SavedMemes />
            </Route>
            <Route path="/saved-gifs">
              <SavedGifs />
            </Route>
            <Route path="/profile">
              <UserProfile />
            </Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default connect(null, { getSavedMemes })(App)