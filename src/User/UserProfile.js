import React, { Component } from 'react'
import { LoginCard, CloseButton } from './UserStyles'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { deleteMeme } from '../actions/memes'
import { deleteGif } from '../actions/gifs'
import { deleteCaptionJoin } from '../actions/captionJoins'
import UserMemes from './UserMemes'
import UserGifs from './UserGifs'

class UserProfile extends Component {

    state = {
        shouldRedirect: false
    }

    handleClick = () => {
        this.setState({
            shouldRedirect: true
        })
    }

    renderLoginMessage = () => {
        return (
            <LoginCard>
                <img
                    style={{ width: "700px" }}
                    src={"https://media.giphy.com/media/voZqawzMMG4Lu/giphy.gif"}
                    alt={"Nothing to see here"}
                />
                <h3> </h3>
                You must be logged in to view your profile.
                <h3> </h3>
                <CloseButton onClick={this.handleClick}>Login</CloseButton>
            </LoginCard>
        )
    }

    render() {
        if (this.props.loggedIn === false) {
            return this.state.shouldRedirect ? (<Redirect to="/login" />) : (
                <>

                    <div>
                        {this.renderLoginMessage()}
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <h1 className="header">Welcome {this.props.user.username}</h1>
                    <UserGifs />
                    <UserMemes />
                </>
            )
        }
    }
}

const mapStateToProps = state => ({
    user: state.users.user,
    savedGifs: state.gifs.savedGifs,
    loadingGifs: state.gifs.loading,
    savedMemes: state.memes.savedMemes,
    loadingMemes: state.memes.loading,
    loggedIn: state.users.loggedIn
})

export default connect(mapStateToProps, { deleteMeme, deleteGif, deleteCaptionJoin })(UserProfile)