import React, { Component } from 'react'
import { ThumbnailCard, PopupCard, LoginCard, CloseButton } from './UserStyles'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { deleteMeme } from '../actions/memes'
import { deleteGif } from '../actions/gifs'
import { deleteCaptionJoin } from '../actions/captionJoins'

class UserProfile extends Component {

    state = {
        shouldRedirect: false
    }

    handleClick = () => {
        this.setState({
            shouldRedirect: true
        })
    }

    handleDeleteMeme = (id) => {
        this.props.deleteMeme(id)
    }

    handleDeleteGif = (id) => {
        this.props.deleteGif(id)
    }

    handleDeleteCaptionJoin = (id) => {
        this.props.deleteCaptionJoin(id)
    }

    renderLoginMessage = () => {
        return (
            <LoginCard>
                <img
                    style={{ width: "700px" }}
                    src={"https://media.giphy.com/media/voZqawzMMG4Lu/giphy.gif"}
                    alt={"Nothing to see here"}
                />
                <h3> </h3>
                You must be logged in to view your profile.
                <h3> </h3>
                <CloseButton onClick={this.handleClick}>Login</CloseButton>
            </LoginCard>
        )
    }

    displayUserGifs() {
        const savedGifAndCaptionList = (id) => {
            const userGifs = this.props.savedGifs.filter(gif => gif.caption_joins[0].user_id === id)
            return (
                userGifs.map(savedGif => {
                    return savedGif.captions.map(caption => {
                        return (
                            <>
                                <a href={`#${savedGif.id}`}>
                                    <ThumbnailCard className="saved-zoom" key={savedGif.id}>
                                        <img
                                            className="thumbnail"
                                            src={savedGif.gif_url}
                                            alt={savedGif.gif_id}
                                        />
                                    </ThumbnailCard>
                                </a>

                                <div id={`${savedGif.id}`} className="overlay">
                                    <div className="modal-popup">
                                        <a className="close" href="#">&times;</a>
                                        <PopupCard key={savedGif.id}>
                                            <img
                                                style={{ width: "500px", maxHeight: "600px" }}
                                                src={savedGif.gif_url}
                                                alt={savedGif.gif_id}
                                            />
                                            <h2 style={{ fontSize: "25px" }}>{caption.text}</h2>
                                            <CloseButton
                                                key={savedGif.id}
                                                onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) { this.handleDeleteGif(savedGif.id); this.handleDeleteCaptionJoin(savedGif.caption_joins[0].id) } }}
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

        const hasGifs = this.props.savedGifs.filter(gif => gif.caption_joins[0].user_id === this.props.user.id)
        if (this.props.loadingGifs) {
            return (
                <>
                    <h3>Loading gifs...</h3>
                    <img
                        src={"https://i.giphy.com/media/j37uIbtLm9atRzOtpR/giphy.webp"}
                        alt={"Loading gifs..."}
                    />
                </>
            )
        } else if (hasGifs.length === 0) {
            return (
                <>
                    <h3>No saved gifs yet</h3>
                    <img
                        src={"https://media.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif"}
                        alt={"Tumbleweed gif"}
                    />
                </>
            )
        } else {
            return (
                <div>
                    <h4>
                        <img
                            style={{ width: "150px", float: "right", marginLeft: "-150px" }}
                            src={require('../assets/images/PoweredBy_200px-Black_HorizLogo.png')}
                            alt="Powered By Giphy"
                        />
                        Your Saved Gifs
                        </h4>
                    <h3> </h3>
                    {savedGifAndCaptionList(this.props.user.id)}
                </div>
            )
        }
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
        if (this.props.loggedIn === false) {
            return this.state.shouldRedirect ? (<Redirect to="/login" />) : (
                <>

                    <div>
                        {this.renderLoginMessage()}
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <h1 className="header">Welcome {this.props.user.username}</h1>
                    {this.displayUserGifs()}
                    {this.displayUserMemes()}
                    {/* <h4 style={{ width: "98%", backgroundColor: "rgba(0, 0, 0, 0.50)" }}>Memes Vs Gifs</h4> */}
                </>
            )
        }
    }
}

const mapStateToProps = state => ({
    user: state.users.user,
    savedGifs: state.gifs.savedGifs,
    loadingGifs: state.gifs.loading,
    savedMemes: state.memes.savedMemes,
    loadingMemes: state.memes.loading,
    loggedIn: state.users.loggedIn
})

export default connect(mapStateToProps, { deleteMeme, deleteGif, deleteCaptionJoin })(UserProfile)