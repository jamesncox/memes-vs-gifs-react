import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getSavedMemes } from '../actions/memes'
import { logo } from '../assets/images/PoweredBy_200px-Black_HorizLogo.png'


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
                <Link to="/">Create!</Link>
                <Link to="/saved-memes">Memes</Link>
                <Link to="/saved-gifs">Gifs</Link>
                {/* <img src={logo} alt="Powered by Giphy" /> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.users.user
})

export default connect(mapStateToProps, { getSavedMemes })(NavBar)