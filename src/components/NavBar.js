import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getSavedMemes } from '../actions/memes'
// import { GiphyLogo } from '../assets/images/PoweredBy_200_Horizontal_Light-Backgrounds_With_Logo.gif'

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
                <Link to="/saved-memes">Created Memes</Link>
                <Link to="/saved-gifs">Created Gifs</Link>
                {/* <img src={GiphyLogo} alt="powerered by Giphy" /> */}
            </div>
        )
    }
}

export default connect(null, { getSavedMemes })(NavBar)