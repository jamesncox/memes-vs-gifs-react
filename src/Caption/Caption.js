import React, { Component } from 'react'
import { CaptionCard, SelectButton } from './CaptionStyles'
import { connect } from 'react-redux'
import { SET_CHOSEN_CAPTION } from '../actionTypes'

class Caption extends Component {

    handleClick = (e) => {
        this.props.setChosenCaption(this.props.text)
    }

    render() {
        return (
            <>
                <div className="zoom">
                    <CaptionCard>
                        <SelectButton onClick={this.handleClick}>Select</SelectButton>
                        <h2>{this.props.text}</h2>
                    </CaptionCard>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        setChosenCaption: (text) => dispatch({ type: SET_CHOSEN_CAPTION, payload: text })
    })
}

const mapStateToProps = state => ({
    chosenCaption: state.captions.chosenCaption
})

export default connect(mapStateToProps, mapDispatchToProps)(Caption)