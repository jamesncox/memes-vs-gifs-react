import React, { Component } from 'react'
import { MemeCard, SaveButton } from '../MemeStyles'
import { connect } from 'react-redux'
import { sendMemeRequest } from '../../actions/memes'

class Meme extends Component {

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

        const memeURL = this.props.memesURL
        const memeId = this.props.randomMeme.id
        const captionText = this.props.chosenCaption.text
        const captionId = this.props.chosenCaption.id
        const userId = this.props.user.id
        const username = this.props.user.username
        const sendObj = { memeURL, memeId, captionText, captionId, userId, username }
        this.props.sendMemeRequest(sendObj)
    }

    render() {
        return (
            <>
                <div className="zoom">
                    <MemeCard>
                        <img style={{ width: "400px" }} src={this.props.memesURL} alt={this.props.name} />
                        <h2>{this.props.chosenCaption.text}</h2>
                        {this.renderSaveButton()}
                    </MemeCard>
                    <div id="snackbar">Meme saved!</div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    chosenCaption: state.captions.chosenCaption,
    randomMeme: state.memes.randomMeme,
    user: state.users.user
})

export default connect(mapStateToProps, { sendMemeRequest })(Meme)