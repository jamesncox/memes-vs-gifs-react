import React, { Component } from 'react'
import { GiphyCard, SaveButton } from '../GiphyStyles'
import { connect } from 'react-redux'

class Giphy extends Component {

    renderSaveButton = () => {
        if (this.props.chosenCaption) {
            return (
                <SaveButton>Save</SaveButton>
            )
        }
    }

    render() {
        return (
            <>
                <div className="zoom">
                    <GiphyCard>
                        <img src={this.props.giphyURL} alt={this.props.name} />
                        <h2>{this.props.chosenCaption}</h2>
                        {this.renderSaveButton()}
                    </GiphyCard>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    chosenCaption: state.captions.chosenCaption
})

export default connect(mapStateToProps)(Giphy)