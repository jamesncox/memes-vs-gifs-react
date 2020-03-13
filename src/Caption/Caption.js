import React from 'react'
import { CaptionCard, SelectButton } from './CaptionStyles'
import { connect } from 'react-redux'
import { SET_CHOSEN_CAPTION } from '../actionTypes'

function Caption(props) {

    const handleClick = () => {
        props.setChosenCaption(props)
    }

    return (
        <>
            <div className="zoom">
                <CaptionCard>
                    <SelectButton onClick={handleClick}>Select</SelectButton>
                    <h2>{props.text}</h2>
                </CaptionCard>
            </div>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return ({
        setChosenCaption: (captionObj) => dispatch({ type: SET_CHOSEN_CAPTION, payload: captionObj })
    })
}

export default connect(null, mapDispatchToProps)(Caption)