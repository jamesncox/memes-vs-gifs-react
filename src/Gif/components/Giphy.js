import React, { Component } from 'react'
import { GiphyCard, SaveButton } from '../GiphyStyles'
import { connect } from 'react-redux'
import { sendGifRequest } from '../../actions/gifs'

class Giphy extends Component {

    renderSaveButton = () => {
        if (this.props.chosenCaption.text) {
            return (
                <SaveButton className="popup" onClick={this.handleClick}>
                    Save
                    <span className="popuptext" id="myPopup">Gif saved!</span>
                </SaveButton>
            )
        }
    }

    handleClick = () => {
        let popup = document.getElementById("myPopup");
        popup.classList.toggle("show");

        const gifURL = this.props.giphyURL
        const gifId = this.props.randomGif.id
        const captionText = this.props.chosenCaption.text
        const captionId = this.props.chosenCaption.id
        const sendObj = { gifURL, gifId, captionText, captionId }
        this.props.sendGifRequest(sendObj)
    }

    render() {
        // console.log(this.props)
        return (
            <>
                <div className="zoom">
                    <GiphyCard>
                        <img src={this.props.giphyURL} alt={this.props.name} />
                        <h2>{this.props.chosenCaption.text}</h2>
                        {this.renderSaveButton()}
                    </GiphyCard>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    chosenCaption: state.captions.chosenCaption,
    randomGif: state.gifs.randomGif
})

export default connect(mapStateToProps, { sendGifRequest })(Giphy)