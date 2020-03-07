import React, { Component } from 'react'
import { CaptionButton, FormButton } from './CaptionStyles'
import { connect } from 'react-redux'
import {
    GEN_RANDOM_CAPTIONS_R,
    GEN_RANDOM_CAPTIONS_PG,
    GEN_RANDOM_CAPTIONS_ALL
} from '../actionTypes'
import NewCaptionForm from './NewCaptionForm'
import Errors from './Errors'

class GenerateCaption extends Component {

    state = {
        isActive: false
    }

    handleShow = () => {
        this.setState({
            isActive: true
        })
    }

    handleHide = () => {
        this.setState({
            isActive: false
        })
    }


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

    renderErrors = () => {
        if (this.props.caption.errors) {
            return <Errors errors={this.props.caption.errors} />
        }
    }

    render() {
        return (
            <div>
                <h4 style={{ width: "20%", backgroundColor: "rgba(0, 0, 0, 0.80)" }}>
                    <FormButton onClick={this.handleShow}>Create Your Own Caption</FormButton>
                    {' '}
                    <FormButton onClick={this.handleHide}>Hide Form</FormButton>
                    <br></br>
                </h4>
                {this.renderErrors()}
                <br></br>
                {this.state.isActive ? <NewCaptionForm /> : null}
                <br></br>
                <h4 style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}><CaptionButton onClick={this.handleClick}>Caption Cards</CaptionButton>
                    {'  '}
                    <select id="selectedRating">
                        <option value="All">All captions</option>
                        <option value="PG">PG only</option>
                        <option value="R">NSFW only</option>
                    </select>
                </h4>
                <h3> </h3>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    caption: state.captions.chosenCaption
})

const mapDispatchToProps = dispatch => ({
    genRandomCaptionsR: () => dispatch({ type: GEN_RANDOM_CAPTIONS_R }),
    genRandomCaptionsPG: () => dispatch({ type: GEN_RANDOM_CAPTIONS_PG }),
    genRandomCaptionsAll: () => dispatch({ type: GEN_RANDOM_CAPTIONS_ALL })
})

export default connect(mapStateToProps, mapDispatchToProps)(GenerateCaption)