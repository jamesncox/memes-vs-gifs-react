import React, { Component } from 'react'
import { SavedGifCard } from './Styles'
import { connect } from 'react-redux'

class SavedGifs extends Component {

    displaySavedGifs() {
        return (
            <SavedGifCard>

            </SavedGifCard>
        )
    }

    render() {
        return (
            <div>
                <h1 className="header">Everyone's favorite gifs</h1>
                {this.displaySavedGifs()}
            </div>
        )
    }
}

export default SavedGifs