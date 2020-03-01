import React, { Component } from 'react'
import { ErrorCard, CloseButton } from './UserStyles'
import { connect } from 'react-redux'
import { CLEAR_USER } from '../actionTypes'

class Errors extends Component {

    handleClick = () => {
        return this.props.clearUser()
    }

    render() {
        return (
            <ErrorCard>
                {this.props.errors.map(error => {
                    return <li key={error}> {error} </li>
                })}
                <p> </p>
                <CloseButton onclick={this.handleClick}>Close</CloseButton>
            </ErrorCard>
        )
    }
}

const mapStateToProps = state => ({
    errors: state.users.user.errors
})

const mapDispatchToProps = state => ({
    clearUser: () => dispatchEvent({ type: CLEAR_USER })
})

export default connect(mapStateToProps, mapDispatchToProps)(Errors)