import React, { Component } from 'react'
import { SavedMemeCard } from './Styles'
import { connect } from 'react-redux'
import { getSavedMemes } from '../actions/memes'

class SavedMemes extends Component {

    render() {

        const savedCaptionList = this.props.savedMemes.map(savedMeme => {
            if (this.props.loading) {
                return <div>Loading...</div>
            } else {
                return savedMeme.captions.map(caption => {
                    return (
                        <SavedMemeCard className="saved-zoom" key={savedMeme.id}>
                            <img src={savedMeme.url} alt={savedMeme.id} />
                            <h2>{caption.text}</h2>
                        </SavedMemeCard>
                    )
                })
            }
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
        savedMemes: state.memes.savedMemes,
        loading: state.loading
    })
}

export default connect(mapStateToProps, { getSavedMemes })(SavedMemes)