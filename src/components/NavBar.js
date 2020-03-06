import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getSavedMemes } from '../actions/memes'

class NavBar extends Component {

    render() {
        return (
            <div className="navbar" >
                <div className="dropdown">
                    <button className="dropbtn">User
                     <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to="/profile">Profile</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign up</Link>
                        <Link to="/logout">Log out</Link>
                    </div>
                </div>
                <Link to="/">Meme vs Gifs</Link>
                <Link to="/saved-gifs">Saved Gifs</Link>
                <Link to="/saved-memes">Saved Memes</Link>
            </div>
        )
    }
}

export default connect(null, { getSavedMemes })(NavBar)