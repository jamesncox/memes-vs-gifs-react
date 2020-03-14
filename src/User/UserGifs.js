import React, { Component } from 'react'
import { ThumbnailCard, PopupCard, CloseButton } from './UserStyles'
import { connect } from 'react-redux'
import { deleteGif } from '../actions/gifs'
import { deleteCaptionJoin } from '../actions/captionJoins'

class UserGifs extends Component {

    handleDeleteGif = (id) => {
        this.props.deleteGif(id)
    }

    handleDeleteCaptionJoin = (id) => {
        this.props.deleteCaptionJoin(id)
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

    render() {
        return this.displayUserGifs()
    }

}

const mapStateToProps = state => ({
    user: state.users.user,
    savedGifs: state.gifs.savedGifs,
    loadingGifs: state.gifs.loading
})

export default connect(mapStateToProps, { deleteGif, deleteCaptionJoin })(UserGifs)