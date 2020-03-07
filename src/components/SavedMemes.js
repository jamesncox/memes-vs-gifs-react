import React, { Component } from 'react'
import { SavedMemeCard, ModalCaptionCard, FilterButton } from './Styles'
import { connect } from 'react-redux'
import { getSavedMemes } from '../actions/memes'

class SavedMemes extends Component {

    //filter by captions rating

    // handleClick = () => {
    //     const selectedRating = document.getElementById("selectedRating")
    //     const filteredCaptions = Object.values(captions.filter(c => c.rating === selectedRating.value))

    //     if (selectedRating.value === "All") {
    //         this.props.showAll(captions)
    //     } else {
    //         this.props.showFiltered(filteredCaptions)
    //     }
    // }

    // filterByRating = () => {
    //     return (
    //         <>
    //             <h4 style={{ width: "15%", backgroundColor: "rgba(0, 0, 0, 0.85)" }}>
    //                 < select id="selectedRating" >
    //                     <option value="All">All captions</option>
    //                     <option value="PG">PG only</option>
    //                     <option value="R">NSFW only</option>
    //                 </select >
    //                 {' '}
    //                 <FilterButton onClick={this.handleClick}>Filter by rating</FilterButton>
    //             </h4>
    //         </>
    //     )
    // }

    render() {
        const savedMemeAndCaptionList = this.props.savedMemes.map(savedMeme => {
            return savedMeme.captions.map(caption => {
                return (
                    <>
                        <a href={`#${savedMeme.meme_id + caption.id}`}>
                            <SavedMemeCard className="saved-zoom" key={savedMeme.meme_id + caption.id}>
                                <img style={{ width: "150px" }} src={savedMeme.meme_url} alt={savedMeme.meme_id + caption.id} />
                                {/* <h2 style={{ fontSize: "15px" }}>{caption.text}</h2> */}
                            </SavedMemeCard>
                        </a>

                        <div id={`${savedMeme.meme_id + caption.id}`} className="overlay">
                            <div className="modal-popup">
                                <a className="close" href="#">&times;</a>
                                <SavedMemeCard style={{ border: "solid", borderColor: "grey" }} key={savedMeme.meme_id + caption.id}>
                                    <img style={{ width: "400px" }} src={savedMeme.meme_url} alt={savedMeme.meme_id + caption.id} />
                                    <h2 style={{ fontSize: "25px" }}>{caption.text}</h2>
                                </SavedMemeCard>
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
                    <h1 className="header">Everyone's shared memes</h1>
                    {/* {this.filterByRating()} */}
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