import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class NavBar extends Component {

    render() {
        return (
            <div class="navbar" >

                <Link to="/">Home</Link>
                <Link to="/saved-gifs">Saved Gifs</Link>
                <Link to="/saved-memes">Saved Memes</Link>

                <div class="dropdown">
                    <button class="dropbtn">User
                     <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <Link to="/signup">Sign Up</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/profile">Profile</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar