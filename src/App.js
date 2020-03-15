import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './stylesheets/app.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import MemeHome from './Meme/components/MemeHome'
import GifHome from './Gif/components/GiphyHome'
import Home from './Home'
import SavedMemes from './components/SavedMemes'
import SavedGifs from './components/SavedGifs'
import UserProfile from './User/UserProfile'
import Login from './User/Login'
import Signup from './User/Signup'
import Logout from './User/Logout'
import About from './components/About'
import { connect } from 'react-redux';
import { getMemes, getSavedMemes } from './actions/memes'
import { getSavedGifs } from './actions/gifs'
import { getToken } from './actions/sessions'
import { setCurrentUser } from './actions/users'

class App extends Component {

  componentDidMount() {
    this.props.getMemes()
    this.props.getSavedMemes()
    this.props.getSavedGifs()
    this.props.getToken()
    this.props.setCurrentUser()
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
            <Route exact path="/logout">
              <Logout />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect(null, { getMemes, getSavedMemes, getSavedGifs, getToken, setCurrentUser })(App)