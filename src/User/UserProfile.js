import React, { Component } from 'react'
import { SavedMemeCard } from './UserStyles'
import { connect } from 'react-redux'

class UserProfile extends Component {

    displayUserMemes() {
        // let userId = this.props.user.id
        // let userMemes = this.props.savedMemes.filter(meme => meme.caption_joins.user_id === userId);
        // console.log(userMemes)

        const savedMemeAndCaptionList = this.props.savedMemes.map(savedMeme => {
            return savedMeme.captions.map(caption => {
                return (
                    <>
                        <a href={`#${savedMeme.meme_id + caption.id}`} >
                            <SavedMemeCard className="saved-zoom" key={savedMeme.id + caption.id}>
                                <img style={{ width: "150px" }} src={savedMeme.meme_url} alt={savedMeme.meme_id + caption.id} />
                                {/* <h2 style={{ fontSize: "15px" }}>{caption.text}</h2> */}
                            </SavedMemeCard>
                        </a>

                        <div id={`${savedMeme.meme_id + caption.id}`} className="overlay" >
                            <div className="modal-popup">
                                <a className="close" href="#">&times;</a>
                                <SavedMemeCard style={{ border: "solid", borderColor: "grey" }} key={savedMeme.id + caption.id}>
                                    <img style={{ width: "500px" }} src={savedMeme.meme_url} alt={savedMeme.meme_id + caption.id} />
                                    <h2 style={{ fontSize: "25px" }}>{caption.text}</h2>
                                </SavedMemeCard>
                            </div>
                        </div>
                    </>
                )
            })
        })

        if (this.props.loadingMemes) {
            return (
                <>
                    <h3>Loading memes...</h3>
                    <img src={"https://i.giphy.com/media/j37uIbtLm9atRzOtpR/giphy.webp"} alt={"Loading memes..."} />
                </>
            )
        } else if (this.props.savedMemes.length === 0) {
            return (
                <>
                    <h3>No saved memes yet</h3>
                    <img src={"https://media.giphy.com/media/Az1CJ2MEjmsp2/giphy.gif"} alt={"Tumbleweed gif"} />
                </>
            )
        } else {
            return (
                <div>
                    <h4>Your Saved Memes</h4>
                    <h3> </h3>
                    {savedMemeAndCaptionList}
                </div>
            )
        }
    }

    displayUserGifs() {
        const savedGifAndCaptionList = this.props.savedGifs.map(savedGif => {
            return savedGif.captions.map(caption => {
                return (
                    <>
                        <a href={`#${savedGif.gif_id + caption.id}`}>
                            <SavedMemeCard className="saved-zoom" key={savedGif.id + caption.id}>
                                <img style={{ width: "150px" }} src={savedGif.gif_url} alt={savedGif.gif_id + caption.id} />
                                {/* <h2 style={{ fontSize: "15px" }}>{caption.text}</h2> */}
                            </SavedMemeCard>
                        </a>

                        <div id={`${savedGif.gif_id + caption.id}`} className="overlay">
                            <div className="modal-popup">
                                <a className="close" href="#">&times;</a>
                                <SavedMemeCard style={{ border: "solid", borderColor: "grey" }} key={savedGif.id + caption.id}>
                                    <img style={{ width: "500px" }} src={savedGif.gif_url} alt={savedGif.gif_id + caption.id} />
                                    <h2 style={{ fontSize: "25px" }}>{caption.text}</h2>
                                </SavedMemeCard>
                            </div>
                        </div>
                    </>
                )
            })
        })

        if (this.props.loadingGifs) {
            return (
                <>
                    <h3>Loading gifs...</h3>
                    <img src={"https://i.giphy.com/media/j37uIbtLm9atRzOtpR/giphy.webp"} alt={"Loading gifs..."} />
                </>
            )
        } else if (this.props.savedGifs.length === 0) {
            return (
                <>
                    <h3>No saved gifs yet</h3>
                    <img src={"https://media.giphy.com/media/Az1CJ2MEjmsp2/giphy.gif"} alt={"Tumbleweed gif"} />
                </>
            )
        } else {
            return (
                <div>
                    <h4>Your Saved Gifs</h4>
                    {savedGifAndCaptionList}
                </div>
            )
        }
    }

    render() {
        return (
            <>
                <h1 className="header">Welcome {this.props.user.username}</h1>
                {this.displayUserMemes()}
                {this.displayUserGifs()}
                <h4 style={{ width: "98%", backgroundColor: "rgba(0, 0, 0, 0.50)" }}>Memes Vs Gifs</h4>
            </>
        )
    }
}

const mapStateToProps = state => ({
    user: state.users.user,
    savedGifs: state.gifs.savedGifs,
    loadingGifs: state.gifs.loading,
    savedMemes: state.memes.savedMemes,
    loadingMemes: state.memes.loading
})

export default connect(mapStateToProps)(UserProfile)