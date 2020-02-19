import React, { Component } from 'react'
import { MemeButton } from './Styles'
import { connect } from 'react-redux'
import { GEN_RANDOM_MEME, CLEAR_CHOSEN_CAPTION } from './actionTypes'

class GenerateMeme extends Component {

    handleClick = (e) => {
        this.props.genRandomMeme()
        this.props.clearChosenCaption()
    }

    render() {
        return (
            <div>
                <MemeButton onClick={this.handleClick}>Generate Random Meme</MemeButton>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    genRandomMeme: () => dispatch({ type: GEN_RANDOM_MEME }),
    clearChosenCaption: () => dispatch({ type: CLEAR_CHOSEN_CAPTION })
})

export default connect(null, mapDispatchToProps)(GenerateMeme)