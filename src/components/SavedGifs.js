import React, { Component } from 'react'
import { SavedGifCard } from './Styles'
import { connect } from 'react-redux'

class SavedGifs extends Component {

    displaySavedGifs() {

    }

    render() {
        return (
            <div>
                <h4>Everyone's favorite Gifs</h4>
                <SavedGifCard>
                    {this.displaySavedGifs()}
                </SavedGifCard>
            </div>
        )
    }
}

export default SavedGifs