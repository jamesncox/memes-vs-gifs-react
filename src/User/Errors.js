import React, { Component } from 'react'
import { ErrorCard, CloseButton } from './UserStyles'
import { connect } from 'react-redux'
import { CLEAR_ERRORS } from '../actionTypes'

class Errors extends Component {

    handleClick = () => {
        this.props.clearErrors()
    }

    render() {
        return (
            <ErrorCard>
                <h2>Could not create account!</h2>
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
    clearErrors: () => dispatch({ type: CLEAR_ERRORS })
})

export default connect(null, mapDispatchToProps)(Errors)