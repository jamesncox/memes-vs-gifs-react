import React, { Component } from 'react'
import { ErrorCard } from './UserStyles'
import { connect } from 'react-redux'

class Errors extends Component {

    render() {
        return (
            <ErrorCard>
                {this.props.errors.map(error => {
                    return <li key={error}> {error} </li>
                })}
            </ErrorCard>
        )
    }
}

const mapStateToProps = state => ({
    errors: state.users.user.errors
})

export default connect(mapStateToProps)(Errors)