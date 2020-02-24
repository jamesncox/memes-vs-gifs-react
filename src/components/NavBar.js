import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getSavedMemes } from '../actions/memes'

class NavBar extends Component {

    render() {
        return (
            <div className="navbar" >

                <Link to="/">Home</Link>
                <Link to="/saved-gifs">Saved Gifs</Link>
                <Link to="/saved-memes">Saved Memes</Link>

                <div className="dropdown">
                    <button className="dropbtn">User
                     <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to="/signup">Sign Up</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/profile">Profile</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { getSavedMemes })(NavBar)