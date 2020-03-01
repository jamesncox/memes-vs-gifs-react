import React, { Component } from 'react'
import { LoginCard, ErrorCard, CloseButton } from './UserStyles'
import { connect } from 'react-redux'
import { signupUser, clearUser } from '../actions/users'
import Errors from './Errors'

class Signup extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        isActive: false

    }

    handleShow = () => {
        this.setState({
            isActive: true
        })
    }

    handleHide = () => {
        this.setState({
            isActive: false
        })
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

    displaySignupForm = () => {
        return (
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
        )
    }

    resetUser = () => {
        return (
            <CloseButton onclick={this.handleHide}>Close</CloseButton>
        )
    }

    render() {
        return (
            <div>
                {this.displaySignupForm()}
                {/* {this.state.isActive ? <Errors /> : null} */}
                {/* {this.state.isActive ? this.resetUser() : null} */}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    errors: state.users.user.errors
})

export default connect(mapStateToProps, { signupUser, clearUser })(Signup)