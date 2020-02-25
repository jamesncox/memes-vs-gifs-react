import React, { Component } from 'react'
import { MemeCard, SaveButton } from '../MemeStyles'
import { connect } from 'react-redux'
import { sendMemeRequest } from '../../actions/memes'

class Meme extends Component {

    renderSaveButton = () => {
        if (this.props.chosenCaption.text) {
            return (
                <SaveButton className="popup" onClick={this.handleClick}>
                    Save
                        <span className="popuptext" id="myPopup">Meme saved!</span>
                </SaveButton>
            )
        }
    }

    handleClick = () => {
        let popup = document.getElementById("myPopup");
        popup.classList.toggle("show");

        const memeUrl = this.props.memesURL
        const memeId = this.props.randomMeme.id
        const captionText = this.props.chosenCaption.text
        const captionId = this.props.chosenCaption.id
        const sendObj = { memeUrl, memeId, captionText, captionId }
        this.props.sendMemeRequest(sendObj)
    }

    render() {
        return (
            <>
                <div className="zoom">
                    <MemeCard>
                        <img src={this.props.memesURL} alt={this.props.name} />
                        <h2>{this.props.chosenCaption.text}</h2>
                        {this.renderSaveButton()}
                    </MemeCard>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    chosenCaption: state.captions.chosenCaption,
    randomMeme: state.memes.randomMeme
})

export default connect(mapStateToProps, { sendMemeRequest })(Meme)