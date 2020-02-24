import React, { Component } from 'react'
import { MemeCard, SaveButton } from '../MemeStyles'
import { connect } from 'react-redux'
import { SEND_SAVED_MEME } from '../../actionTypes'

class Meme extends Component {

    renderSaveButton = () => {
        if (this.props.chosenCaption) {
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
        this.props.sendSavedMeme({ memeObj: this.props.randomMeme, captionObj: this.props.chosenCaption })
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

const mapDispatchToProps = dispatch => ({
    sendSavedMeme: sendObj => dispatch({ type: SEND_SAVED_MEME, payload: sendObj })
})

export default connect(mapStateToProps, mapDispatchToProps)(Meme)