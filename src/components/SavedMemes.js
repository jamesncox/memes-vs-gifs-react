import React, { Component } from 'react'
import { SavedMemeCard } from './Styles'
import { connect } from 'react-redux'
import { getSavedMemes } from '../actions/memes'

class SavedMemes extends Component {

    render() {
        // I need to get the CaptionJoin id from CaptionJoins create action to set as the key
        const savedMemeAndCaptionList = this.props.savedMemes.map(savedMeme => {
            return savedMeme.captions.map(caption => {
                console.log(savedMeme)
                return (
                    < SavedMemeCard className="saved-zoom" key={savedMeme.id.created_at} >
                        <img src={savedMeme.meme_url} alt={savedMeme.id.created_at} />
                        <h2>{caption.text}</h2>
                    </SavedMemeCard >
                )
            })
        })

        if (this.props.loading) {
            return (
                <>
                    <h3>Loading memes...</h3>
                    <img src={"https://i.giphy.com/media/j37uIbtLm9atRzOtpR/giphy.webp"} alt={"Loading gifs..."} />
                </>
            )
        } else {
            return (
                <div>
                    <h1 className="header">Everyone's favorite memes</h1>
                    {savedMemeAndCaptionList}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return ({
        savedMemes: state.memes.savedMemes,
        loading: state.memes.loading
    })
}

export default connect(mapStateToProps, { getSavedMemes })(SavedMemes)