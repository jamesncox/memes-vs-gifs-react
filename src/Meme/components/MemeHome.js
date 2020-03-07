import React, { Component } from 'react'
import CaptionContainer from '../../Caption/CaptionContainer'
import MemeContainer from './MemeContainer'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LoginCard, CloseButton } from '../MemeStyles'

class MemeHome extends Component {

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
                <img src={"https://media.giphy.com/media/1zSz5MVw4zKg0/giphy.gif"} alt={"Jonah Hill stop that"} />
                <h3> </h3>
                You must be logged in to create a meme!
                    <h3> </h3>
                <CloseButton onClick={this.handleClick}>Login</CloseButton>
            </LoginCard>
        )
    }

    render() {
        if (this.props.loggedIn === false) {
            return this.state.shouldRedirect ? (<Redirect to="/login" />) : (
                <>
                    <h1 className="header">What Do You Meme?</h1>
                    {this.renderLoginMessage()}
                </>
            )
        } else {
            return (
                <div>
                    <h1 className="header">What Do You Meme?</h1>
                    <MemeContainer />
                    <CaptionContainer />
                    <h4 style={{ width: "98%", backgroundColor: "rgba(0, 0, 0, 0.50)" }}>Memes Vs Gifs</h4>
                </div >
            )
        }
    }
}

const mapStateToProps = state => ({
    loggedIn: state.users.loggedIn
})

export default connect(mapStateToProps)(MemeHome)