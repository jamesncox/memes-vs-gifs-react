import React, { Component } from 'react'
import Giphy from './Giphy.js'
import SearchBar from './SearchBar'
import NextButton from './NextButton'
import { connect } from 'react-redux'
import { GEN_RANDOM_GIF, CLEAR_CHOSEN_CAPTION } from '../actionTypes'

class GiphyContainer extends Component {

    renderRandomGiphy = () => {
        if (this.props.randomGif) {
            return (
                <Giphy
                    key={this.props.randomGif.id}
                    giphyURL={this.props.randomGif.images.original.url}
                />
            )
        }
    }

    handleClick = () => {
        this.props.genRandomGif()
        this.props.clearChosenCaption()
    }

    render() {
        return (
            <div>
                <SearchBar />
                <NextButton handleClick={this.handleClick} />
                {this.renderRandomGiphy()}
                <h1>{' '}</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
        randomGif: state.gifs.randomGif,
        chosenCaption: state.chosenCaption
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        genRandomGif: () => dispatch({ type: GEN_RANDOM_GIF }),
        clearChosenCaption: () => dispatch({ type: CLEAR_CHOSEN_CAPTION })
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(GiphyContainer)