import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {

    render() {
        return (
            <div className="navbar" >
                <div className="dropdown">
                    <button style={{ boxShadow: "none" }} className="dropbtn">User
                     <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to="/profile">Profile</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign up</Link>
                        <Link to="/logout">Log out</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button style={{ boxShadow: "none" }} className="dropbtn">Create!
                     <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to="/">Home</Link>
                        <Link to="/meme-game">Meme</Link>
                        <Link to="/gif-game">Gif</Link>
                    </div>
                </div>
                <Link to="/saved-memes">Memes</Link>
                <Link to="/saved-gifs">Gifs</Link>
                <a href="https://www.giphy.com" target="_blank" style={{ float: "right", marginTop: "0px" }} >
                    <img src={require('../assets/images/PoweredBy_200px-Black_HorizLogo.png')} alt="Powered By Giphy" />
                </a>
            </div >
        )
    }
}

export default NavBar