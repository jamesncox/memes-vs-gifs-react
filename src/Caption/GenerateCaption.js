import React, { Component } from 'react'
import { CaptionButton } from './CaptionStyles'
import { connect } from 'react-redux'
import {
    GEN_RANDOM_CAPTIONS_R,
    GEN_RANDOM_CAPTIONS_PG,
    GEN_RANDOM_CAPTIONS_ALL,
    CLEAR_CAPTIONS
} from '../actionTypes'
import NewCaptionForm from './NewCaptionForm'

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

    // handleCreate = () => {
    //     if (this.props.clearCaptions()) {
    //         this.props.clearCaptions()
    //     }
    // }

    render() {
        return (
            <div>
                <h4><CaptionButton onClick={this.handleClick}>Caption Cards</CaptionButton>
                    {'  '}
                    <select id="selectedRating">
                        <option value="All">All captions</option>
                        <option value="PG">PG only</option>
                        <option value="R">NSFW only</option>
                    </select>
                    <br></br>
                    <br></br>
                    <CaptionButton onClick={this.handleCreate}>Create Your Own Caption</CaptionButton></h4>
                <h3> </h3>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    genRandomCaptionsR: () => dispatch({ type: GEN_RANDOM_CAPTIONS_R }),
    genRandomCaptionsPG: () => dispatch({ type: GEN_RANDOM_CAPTIONS_PG }),
    genRandomCaptionsAll: () => dispatch({ type: GEN_RANDOM_CAPTIONS_ALL }),
    clearCaptions: () => dispatch({ type: CLEAR_CAPTIONS })
})

export default connect(null, mapDispatchToProps)(GenerateCaption)