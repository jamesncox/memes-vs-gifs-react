import React, { Component } from 'react'
import { ThumbnailCard, PopupCard, CloseButton } from './UserStyles'
import { connect } from 'react-redux'
import { deleteMeme } from '../actions/memes'
import { deleteCaptionJoin } from '../actions/captionJoins'

class UserMemes extends Component {

    handleDeleteMeme = (id) => {
        this.props.deleteMeme(id)
    }

    handleDeleteCaptionJoin = (id) => {
        this.props.deleteCaptionJoin(id)
    }

    displayUserMemes() {
        const savedMemeAndCaptionList = (id) => {
            const userMemes = this.props.savedMemes.filter(meme => meme.caption_joins[0].user_id === id)
            return (
                userMemes.map(savedMeme => {
                    return savedMeme.captions.map(caption => {
                        return (
                            <>
                                <a href={`#${savedMeme.meme_id}`} >
                                    <ThumbnailCard className="saved-zoom" key={savedMeme.id}>
                                        <img
                                            className="thumbnail"
                                            src={savedMeme.meme_url}
                                            alt={savedMeme.meme_id}
                                        />
                                    </ThumbnailCard>
                                </a>

                                <div id={`${savedMeme.meme_id}`} className="overlay" >
                                    <div className="modal-popup">
                                        <a className="close" href="#">&times;</a>
                                        <PopupCard key={savedMeme.meme_id}>
                                            <img
                                                style={{ maxWidth: "500px", maxHeight: "500px" }}
                                                src={savedMeme.meme_url}
                                                alt={savedMeme.meme_id}
                                            />
                                            <h2 style={{ fontSize: "25px" }}>{caption.text}</h2>
                                            <CloseButton
                                                key={savedMeme.id}
                                                onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.handleDeleteMeme(savedMeme.id); this.handleDeleteCaptionJoin(savedMeme.caption_joins[0].id) }}
                                                style={{ fontSize: "15px " }}>
                                                Delete
                                            </CloseButton>
                                        </PopupCard>
                                    </div>
                                </div>
                            </>
                        )
                    })
                })
            )
        }

        const hasMemes = this.props.savedMemes.filter(meme => meme.caption_joins[0].user_id === this.props.user.id)
        if (this.props.loadingMemes) {
            return (
                <>
                    <h3>Loading memes...</h3>
                    <img
                        src={"https://i.giphy.com/media/j37uIbtLm9atRzOtpR/giphy.webp"}
                        alt={"Loading memes..."}
                    />
                </>
            )
        } else if (hasMemes.length === 0) {
            return (
                <>
                    <h3>No saved memes yet</h3>
                    <img
                        src={"https://media.giphy.com/media/o5oLImoQgGsKY/giphy.gif"}
                        alt={"Tumbleweed gif"}
                    />
                </>
            )
        } else {
            return (
                <div>
                    <h4>Your Saved Memes</h4>
                    <h3> </h3>
                    {savedMemeAndCaptionList(this.props.user.id)}
                </div>
            )
        }
    }

    render() {
        return this.displayUserMemes()
    }

}

const mapStateToProps = state => ({
    user: state.users.user,
    savedMemes: state.memes.savedMemes,
    loadingMemes: state.memes.loading
})

export default connect(mapStateToProps, { deleteMeme, deleteCaptionJoin })(UserMemes)