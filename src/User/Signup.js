import React, { Component } from 'react'
import { LoginCard, CloseButton } from './UserStyles'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signupUser } from '../actions/users'
import Errors from './Errors'

class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
            shouldRedirect: false
        }
    }

    // create a popup that displays styled card is user successfully logged in
    // and when they click the button to close the card, will redirect them to their profile
    // OR
    // create a loading pop up and once loading is complete, set shouldRedirect: true and show profile

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSignup = e => {
        e.preventDefault()
        this.props.signupUser(this.props.token, this.state)
        this.setState({
            username: '',
            email: '',
            password: '',
            password_confirmation: ''
        })
    }

    renderErrors = () => {
        if (this.props.errors.length > 0) {
            return <Errors errors={this.props.errors} />
        }
    }

    handleClick = () => {
        this.setState({
            shouldRedirect: true
        })
    }

    renderSuccessMessage = () => {
        if (this.props.user) {
            return (
                <LoginCard>
                    <img src={"https://media.giphy.com/media/slOhiKAVFgwr6/giphy.gif"} alt={"Elf congratulations"} />
                    <h3> </h3>
                    {this.props.user.username}, your profile was successfully created!
                    <h3> </h3>
                    <CloseButton onClick={this.handleClick}> Your profile </CloseButton>
                </LoginCard>
            )
        }
    }

    // create a conditional that IF a user is logged in, render a message that must signout first or something
    render() {
        if (!this.props.user === null) {
            return this.state.shouldRedirect ? (<Redirect to="/profile" />) : (
                <>
                    <h1 className="header">Sign up</h1>
                    <div>
                        {this.renderSuccessMessage()}
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <h1 className="header">Sign up</h1>
                    <div>
                        {this.renderErrors()}
                    </div>
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
}

const mapStateToProps = state => ({
    user: state.users.user,
    errors: state.users.errors,
    token: state.sessions.token
})

export default connect(mapStateToProps, { signupUser })(Signup)