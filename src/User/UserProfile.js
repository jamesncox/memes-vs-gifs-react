import React, { Component } from 'react'
import { SavedMemeCard, SavedGifCard } from './UserStyles'
import { connect } from 'react-redux'

class UserProfile extends Component {

    displayUserGifs() {
        const savedGifAndCaptionList = this.props.savedGifs.map(savedGif => {
            return savedGif.captions.map(caption => {
                return (
                    <SavedMemeCard className="zoom" key={savedGif.id + caption.id}>
                        <img style={{ width: "150px" }} src={savedGif.gif_url} alt={savedGif.gif_id + caption.id} />
                        <h2 style={{ fontSize: "15px" }}>{caption.text}</h2>
                    </SavedMemeCard>
                )
            })
        })

        if (this.props.loading) {
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

    displayUserMemes() {
        const savedMemeAndCaptionList = this.props.savedMemes.map(savedMeme => {
            return savedMeme.captions.map(caption => {
                return (
                    <SavedMemeCard className="zoom" key={savedMeme.id + caption.id}>
                        <img style={{ width: "150px" }} src={savedMeme.meme_url} alt={savedMeme.id + caption.id} />
                        <h2 style={{ fontSize: "15px" }} >{caption.text}</h2>
                    </SavedMemeCard>
                )
            })
        })

        if (this.props.loading) {
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

    render() {
        return (
            <>
                <h1 className="header">Welcome {this.props.user.username}</h1>
                {this.displayUserMemes()}
                {this.displayUserGifs()}
            </>
        )
    }
}

const mapStateToProps = state => ({
    user: state.users.user,
    savedGifs: state.gifs.savedGifs,
    loading: state.gifs.loading,
    savedMemes: state.memes.savedMemes,
    loading: state.memes.loading
})

export default connect(mapStateToProps)(UserProfile)