import React, { Component } from 'react'
import { LoginCard } from './UserStyles'
import { connect } from 'react-redux'
import { signupUser } from '../actions/users'

class Signup extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password_confirmation: ''

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
            password: '',
            password_confirmation: ''
        })
    }

    render() {
        return (
            <>
                <h1 className="header">Sign up</h1>
                <LoginCard>
                    <img src={"https://i.giphy.com/media/xUOrw5LIxb8S9X1LGg/giphy.webp"} alt={"Connor McGregor"} />
                    <h3> </h3>
                    <form onSubmit={this.handleSignup.bind(this)}>
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={this.state.username}
                            onChange={e => this.handleChange(e)}
                        />
                        <p> </p>
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={this.state.email}
                            onChange={e => this.handleChange(e)}
                        />
                        <p> </p>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={e => this.handleChange(e)}
                        />
                        <p> </p>
                        <input
                            type="password"
                            placeholder="Password confirmation"
                            name="password_confirmation"
                            value={this.state.password_confirmation}
                            onChange={e => this.handleChange(e)}
                        />
                        <p> </p>
                        <input type="submit" value="Create Profile" />
                    </form>
                </LoginCard>
            </>
        )
    }
}

export default connect(null, { signupUser })(Signup)