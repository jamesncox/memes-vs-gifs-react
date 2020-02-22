import React, { Component } from 'react'
import { SavedMemeCard } from './Styles'
import { connect } from 'react-redux'

class SavedMemes extends Component {

    displaySavedMemes() {
        return (
            <SavedMemeCard>

            </SavedMemeCard>
        )

    }

    render() {
        return (
            <div>
                <h1 className="header">Everyone's favorite memes</h1>
                {this.displaySavedMemes()}
            </div>
        )
    }
}

export default SavedMemes