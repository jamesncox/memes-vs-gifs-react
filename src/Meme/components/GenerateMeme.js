import React, { Component } from 'react'
import { MemeButton } from '../MemeStyles'
import { connect } from 'react-redux'
import { GEN_RANDOM_MEME, CLEAR_CHOSEN_CAPTION } from '../../actionTypes'
import CreateMeme from './CreateMeme'

class GenerateMeme extends Component {

    state = {
        isActive: false
    }

    handleShow = () => {
        this.setState({
            isActive: true
        })
    }

    handleHide = () => {
        this.setState({
            isActive: false
        })
    }

    handleClick = (e) => {
        this.props.genRandomMeme()
        this.props.clearChosenCaption()
    }

    render() {
        return (
            <div>
                <h4 syle={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}>
                    <MemeButton onClick={this.handleClick}>Random Meme</MemeButton>
                    {' '}
                    <MemeButton onClick={this.handleShow}>Upload meme</MemeButton>
                    {' '}
                    <MemeButton onClick={this.handleHide}>Hide Form</MemeButton>
                    <br></br>
                </h4>
                <br></br>
                {this.state.isActive ? <CreateMeme /> : null}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    genRandomMeme: () => dispatch({ type: GEN_RANDOM_MEME }),
    clearChosenCaption: () => dispatch({ type: CLEAR_CHOSEN_CAPTION })
})

export default connect(null, mapDispatchToProps)(GenerateMeme)