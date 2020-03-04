import React, { Component } from 'react'
import { ErrorCard, CloseButton } from './CaptionStyles'
import { connect } from 'react-redux'
import { CLEAR_CHOSEN_CAPTION } from '../actionTypes'

class Errors extends Component {

    handleClick = () => {
        this.props.clearCreatedCaption()
    }

    render() {
        return (
            <ErrorCard>
                <h2>Could not create caption</h2>
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
    clearCreatedCaption: () => dispatch({ type: CLEAR_CHOSEN_CAPTION })
})

export default connect(null, mapDispatchToProps)(Errors)