import React, { Component } from 'react'
import { ErrorCard, CloseButton } from './CaptionStyles'
import { connect } from 'react-redux'
import { CLEAR_CAPTION_ERRORS } from '../actionTypes'

class Errors extends Component {

    handleClick = () => {
        this.props.clearErrors()
    }

    render() {
        return (
            <ErrorCard>
                <h3>Could not create caption</h3>
                {this.props.errors.map(error => {
                    return <li key={error}> {error} </li>
                })}
                <p> </p>
                <CloseButton onClick={this.handleClick}>Close</CloseButton>
            </ErrorCard>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    clearErrors: () => dispatch({ type: CLEAR_CAPTION_ERRORS })
})

export default connect(null, mapDispatchToProps)(Errors)