import React, { Component } from 'react'
import { LoginCard } from './UserStyles'
import { connect } from 'react-redux'
import { signupUser } from '../actions/users'

class Signup extends Component {
    state = {
        username: '',
        password: '',
        email: ''

    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSignup = e => {
        e.preventDefault()
        this.props.signupUser(this.state)
        this.setState({
            username: '',
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <>
                <h1 className="header">Sign up</h1>
                <LoginCard className="zoom">
                    Sign up
                    <h3> </h3>
                    <form onSubmit={this.handleSignup.bind(this)}>
                        <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
                        {' '}
                        <input type="text" placeholder="Email" name="email" value={this.state.email} onChange={e => this.handleChange(e)} />
                        {' '}
                        <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
                        {' '}
                        <input type="submit" value="Sign up" />
                    </form>
                </LoginCard>
            </>
        )
    }
}

export default connect(null, { signupUser })(Signup)