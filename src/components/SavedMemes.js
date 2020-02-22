import React, { Component } from 'react'
import { SavedMemeCard } from './Styles'
import { connect } from 'react-redux'

class SavedMemes extends Component {

    displaySavedMemes() {

    }

    render() {
        return (
            <div>
                <h4>Everyone's favorite Memes</h4>
                <SavedMemeCard>
                    {this.displaySavedMemes()}
                </SavedMemeCard>
            </div>
        )
    }
}

export default SavedMemes