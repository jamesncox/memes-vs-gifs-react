import React, { Component } from 'react'
import { SavedMemeCard, LoginCard, CloseButton } from './UserStyles'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class UserMemes extends Component {

    state = {
        shouldRedirect: false
    }

    handleClick = () => {
        this.setState({
            shouldRedirect: true
        })
    }

    renderLoginMessage = () => {
        return (
            <LoginCard>
                <img src={"https://media.giphy.com/media/voZqawzMMG4Lu/giphy.gif"} alt={"Elf congratulations"} />
                <h3> </h3>
                You must be logged in to view your profile.
                    <h3> </h3>
                <CloseButton onClick={this.handleClick}>Login</CloseButton>
            </LoginCard>
        )
    }


    displayUserMemes() {
        const savedMemeAndCaptionList = (id) => {
            const userMemes = this.props.savedMemes.filter(meme => meme.caption_joins[0].user_id === id)
            return (
                userMemes.map(savedMeme => {
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
            )
        }

        const hasMemes = this.props.savedMemes.filter(meme => meme.caption_joins[0].user_id === this.props.user.id)
        if (this.props.loadingMemes) {
            return (
                <>
                    <h3>Loading memes...</h3>
                    <img src={"https://i.giphy.com/media/j37uIbtLm9atRzOtpR/giphy.webp"} alt={"Loading memes..."} />
                </>
            )
        } else if (hasMemes.length === 0) {
            return (
                <>
                    <h3>No saved memes yet</h3>
                    <img src={"https://media.giphy.com/media/o5oLImoQgGsKY/giphy.gif"} alt={"Tumbleweed gif"} />
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
                <div>
                    {this.renderLoginMessage()}
                </div>
            )
        } else {
            return (
                <div>
                    {this.displayUserMemes()}
                </div>
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

export default connect(mapStateToProps)(UserMemes)