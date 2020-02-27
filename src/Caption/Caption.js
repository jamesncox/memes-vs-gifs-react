import React, { Component } from 'react'
import { CaptionCard, SelectButton } from './CaptionStyles'
import { connect } from 'react-redux'
import { SET_CHOSEN_CAPTION } from '../actionTypes'

class Caption extends Component {

    handleClick = (e) => {
        this.props.setChosenCaption(this.props)
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
        setChosenCaption: (captionObj) => dispatch({ type: SET_CHOSEN_CAPTION, payload: captionObj })
    })
}

export default connect(null, mapDispatchToProps)(Caption)