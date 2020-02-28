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
import Login from './User/Login'
import Signup from './User/Signup'
import { connect } from 'react-redux';
import { getMemes, getSavedMemes } from './actions/memes'
import { getSavedGifs } from './actions/gifs'
import { setToken } from './actions/sessions'

class App extends Component {

  componentDidMount() {
    this.props.getMemes()
    this.props.getSavedMemes()
    this.props.getSavedGifs()
    // need to put fetch for cookies here to set cookie to always have available
    fetch('http://localhost:3000/api/v1/auth-check')
      .then(res => res.json())
      .then(token => this.props.setToken(token.csrf_auth_token))
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
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default connect(null, { getMemes, getSavedMemes, getSavedGifs, setToken })(App)