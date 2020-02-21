import React, { Component } from 'react'
import { MemeButton } from '../MemeStyles'
import { connect } from 'react-redux'
import { GEN_RANDOM_MEME, CLEAR_CHOSEN_CAPTION } from '../../actionTypes'

class GenerateMeme extends Component {

    handleClick = (e) => {
        this.props.genRandomMeme()
        this.props.clearChosenCaption()
    }

    render() {
        return (
            <div>
                <h4><MemeButton onClick={this.handleClick}>Random Meme</MemeButton></h4>
                <h1>{' '}</h1>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    genRandomMeme: () => dispatch({ type: GEN_RANDOM_MEME }),
    clearChosenCaption: () => dispatch({ type: CLEAR_CHOSEN_CAPTION })
})

export default connect(null, mapDispatchToProps)(GenerateMeme)