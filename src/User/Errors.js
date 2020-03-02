import React, { Component } from 'react'
import { ErrorCard, CloseButton } from './UserStyles'
import { connect } from 'react-redux'
import { CLEAR_USER } from '../actionTypes'

class Errors extends Component {

    handleClick = () => {
        console.log("close button clicked...")
        this.props.clearUser()
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

const mapStateToProps = state => ({
    errors: state.users.user.errors
})

const mapDispatchToProps = dispatch => ({
    clearUser: () => dispatch({ type: CLEAR_USER })
})

export default connect(mapStateToProps, mapDispatchToProps)(Errors)