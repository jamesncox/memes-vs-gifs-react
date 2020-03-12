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
                <div className="dropdown">
                    <button className="dropbtn">Create!
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
                <img style={{ float: "right", marginTop: "15px" }} src={require('../assets/images/PoweredBy_200px-Black_HorizLogo.png')} alt="Powered By Giphy" />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.users.user
})

export default connect(mapStateToProps, { getSavedMemes })(NavBar)