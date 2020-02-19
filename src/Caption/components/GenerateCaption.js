import React, { Component } from 'react'
import { CaptionButton } from '../CaptionStyles'
import { connect } from 'react-redux'
import {
    GEN_RANDOM_CAPTIONS_R,
    GEN_RANDOM_CAPTIONS_PG,
    GEN_RANDOM_CAPTIONS_ALL
} from '../../actionTypes'

class GenerateCaption extends Component {

    handleClick = () => {
        const selectedRating = document.getElementById("selectedRating")

        if (selectedRating.value === "R") {
            this.props.genRandomCaptionsR()
        } if (selectedRating.value === "PG") {
            this.props.genRandomCaptionsPG()
        } if (selectedRating.value === "All") {
            this.props.genRandomCaptionsAll()
        } else {
            return null
        }
    }

    render() {
        return (
            <div>
                <CaptionButton onClick={this.handleClick}>Generate Caption Cards</CaptionButton>
                <select id="selectedRating">
                    <option value="All">All captions</option>
                    <option value="PG">PG only</option>
                    <option value="R">NSFW only</option>
                </select>
                <h4>Now choose the most hilarious caption!</h4>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    genRandomCaptionsR: () => dispatch({ type: GEN_RANDOM_CAPTIONS_R }),
    genRandomCaptionsPG: () => dispatch({ type: GEN_RANDOM_CAPTIONS_PG }),
    genRandomCaptionsAll: () => dispatch({ type: GEN_RANDOM_CAPTIONS_ALL })
})

export default connect(null, mapDispatchToProps)(GenerateCaption)