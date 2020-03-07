import React, { Component } from 'react';
import GiphyContainer from './GiphyContainer'
import CaptionContainer from '../../Caption/CaptionContainer'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LoginCard, CloseButton } from '../GiphyStyles'

class GiphyHome extends Component {

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
                <img src={"https://media.giphy.com/media/eeL8EcBBTwSMLACw6F/giphy.gif"} alt={"Elf congratulations"} />
                <h3> </h3>
                You must be logged in to create a gif!
                    <h3> </h3>
                <CloseButton onClick={this.handleClick}>Login</CloseButton>
            </LoginCard>
        )
    }

    render() {
        if (this.props.loggedIn === false) {
            return this.state.shouldRedirect ? (<Redirect to="/login" />) : (
                <>
                    <h1 className="header">That's What You Gif!</h1>
                    {this.renderLoginMessage()}
                </>
            )
        } else {
            return (
                <div>
                    <h1 className="header">That's What You Gif!</h1>
                    <GiphyContainer />
                    <CaptionContainer />
                    <h4 style={{ width: "98%", backgroundColor: "rgba(0, 0, 0, 0.50)" }}>Memes Vs Gifs</h4>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    loggedIn: state.users.loggedIn
})

export default connect(mapStateToProps)(GiphyHome)
