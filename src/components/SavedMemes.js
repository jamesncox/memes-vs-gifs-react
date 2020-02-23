import React, { Component } from 'react'
import { SavedMemeCard } from './Styles'
import { connect } from 'react-redux'
import { getSavedMemes } from '../actions/memes'

class SavedMemes extends Component {

    render() {
        const savedCaptionList = this.props.savedMemes.map(savedMeme => {
            return savedMeme.captions.map(caption => {
                return (
                    <SavedMemeCard>
                        <img src={savedMeme.url} alt={savedMeme.id} />
                        <h2>{caption.text}</h2>
                    </SavedMemeCard>
                )
            })
        })

        return (
            <div>
                <h1 className="header">Everyone's favorite memes</h1>
                {savedCaptionList}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
        savedMemes: state.memes.savedMemes
    })
}

export default connect(mapStateToProps, { getSavedMemes })(SavedMemes)