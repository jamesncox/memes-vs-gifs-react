import React, { Component } from 'react'
import { MemeCard, SaveButton } from '../MemeStyles'
import { connect } from 'react-redux'

class Meme extends Component {

    renderSaveButton = () => {
        if (this.props.chosenCaption) {
            return (
                <SaveButton className="popup" onClick={this.handleClick}>
                    Save
                        <span class="popuptext" id="myPopup">Meme saved!</span>
                </SaveButton>
            )
        }
    }

    handleClick = () => {
        let popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }

    render() {
        return (
            <>
                <div className="zoom">
                    <MemeCard>
                        <img src={this.props.memesURL} alt={this.props.name} />
                        <h2>{this.props.chosenCaption}</h2>
                        {this.renderSaveButton()}
                    </MemeCard>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    chosenCaption: state.captions.chosenCaption
})

export default connect(mapStateToProps)(Meme)