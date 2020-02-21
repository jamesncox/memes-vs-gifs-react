import React, { Component } from 'react'
import Giphy from './Giphy.js'
import SearchBar from './SearchBar'
import NextButton from './NextButton'
import { connect } from 'react-redux'
import {
    GEN_RANDOM_GIF,
    CLEAR_CHOSEN_CAPTION,
    CLEAR_GIF, CLEAR_CAPTIONS
} from '../../actionTypes'

class GiphyContainer extends Component {

    componentWillUnmount() {
        console.log(this.props)
        this.props.clearGif()
        this.props.clearCaptions()
    }

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
        clearChosenCaption: () => dispatch({ type: CLEAR_CHOSEN_CAPTION }),
        clearGif: () => dispatch({ type: CLEAR_GIF }),
        clearCaptions: () => dispatch({ type: CLEAR_CAPTIONS })
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(GiphyContainer)