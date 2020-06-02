import React, { Component } from 'react'
import { ThumbnailCard, PopupCard } from './Styles'
import { connect } from 'react-redux'
import { getSavedMemes } from '../actions/memes'

class SavedMemes extends Component {

    // state = {
    //     likeCounts: {}
    // }

    // handleLike = (id) => {
    //     let likes = 1
    //     if (this.state.likeCounts[id]) { likes = this.state.likeCounts[id] + 1 }
    //     this.setState({
    //         likeCounts: {
    //             ...this.state.likeCounts,
    //             [id]: likes
    //         }
    //     })
    // }

    render() {
        const savedMemeAndCaptionList = this.props.savedMemes.map(savedMeme => {
            return savedMeme.captions.map(caption => {
                return (
                    <>
                        <a href={`#${savedMeme.id}`}>
                            <ThumbnailCard className="saved-zoom" key={savedMeme.id}>
                                <img
                                    className="thumbnail"
                                    src={savedMeme.meme_url}
                                    alt={savedMeme.id}
                                />
                                {/* <button onClick={() => this.handleLike(savedMeme.id)}> Like </button> */}
                                {/* <h5>liked: {this.state.likeCounts[savedMeme.id]} times</h5> */}
                            </ThumbnailCard>
                        </a>

                        <div id={`${savedMeme.id}`} className="overlay">
                            <div className="modal-popup">
                                <a className="close" href="#">&times;</a>
                                <PopupCard key={savedMeme.id}>
                                    <img
                                        style={{ maxHeight: "500px", width: "400px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}
                                        src={savedMeme.meme_url}
                                        alt={savedMeme.id}
                                    />
                                    <h2 style={{ fontSize: "25px" }}>{caption.text}</h2>
                                    <h5>by: {savedMeme.username}</h5>
                                </PopupCard>
                            </div>
                        </div>
                    </>
                )
            })
        })

        if (this.props.loading) {
            return (
                <>
                    <h3>Loading memes...</h3>
                    <img
                        src={"https://i.giphy.com/media/j37uIbtLm9atRzOtpR/giphy.webp"}
                        alt={"Loading memes..."}
                    />
                </>
            )
        } else if (this.props.savedMemes.length === 0) {
            return (
                <>
                    <h3>No saved memes yet</h3>
                    <img
                        style={{ width: "500px" }}
                        src={"https://media.giphy.com/media/Az1CJ2MEjmsp2/giphy.gif"}
                        alt={"Tumbleweed gif"}
                    />
                </>
            )
        } else {
            return (
                <div key={Math.ceil(Math.random() * 10)}>
                    <h1 className="header">Everyone's created memes</h1>
                    <h3> </h3>
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