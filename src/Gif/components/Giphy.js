import React, { Component } from 'react'
import { GiphyCard, SaveButton } from '../GiphyStyles'
import { connect } from 'react-redux'
import { sendGifRequest } from '../../actions/gifs'

class Giphy extends Component {

    renderSaveButton = () => {
        if (this.props.chosenCaption.text) {
            return (
                <SaveButton onClick={this.handleClick}>Save</SaveButton>
            )
        }
    }

    handleClick = () => {
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);

        const gifURL = this.props.giphyURL
        const gifId = this.props.randomGif.id
        const captionText = this.props.chosenCaption.text
        const captionId = this.props.chosenCaption.id
        const userId = this.props.user.id
        const username = this.props.user.username
        const sendObj = { gifURL, gifId, captionText, captionId, userId, username }
        this.props.sendGifRequest(sendObj)
    }

    render() {
        return (
            <>
                <div className="zoom">
                    <GiphyCard>
                        <img src={this.props.giphyURL} alt={this.props.name} />
                        <h2>{this.props.chosenCaption.text}</h2>
                        {this.renderSaveButton()}
                    </GiphyCard>
                    <div style={{ marginLeft: "-75px" }} id="snackbar">Gif saved!</div>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    chosenCaption: state.captions.chosenCaption,
    randomGif: state.gifs.randomGif,
    user: state.users.user
})

export default connect(mapStateToProps, { sendGifRequest })(Giphy)