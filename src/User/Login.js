import React, { Component } from 'react'
import { LoginCard, CloseButton } from './UserStyles'
import { connect } from 'react-redux'
import { loginUser } from '../actions/users'
import { Redirect } from 'react-router-dom'
import Errors from './Errors'

class Login extends Component {
    state = {
        username: '',
        password: '',
        shouldRedirect: false
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = e => {
        e.preventDefault()
        this.props.loginUser(this.state)
        this.setState({
            username: '',
            password: ''
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
                    <img src={"https://media.giphy.com/media/3o7aDgf134NzaaHI8o/giphy.gif"} alt={"Elf congratulations"} />
                    <h3> </h3>
                    You are logged in, {this.props.user.username}!
                    <h3> </h3>
                    <CloseButton onClick={this.handleClick}> Your profile </CloseButton>
                </LoginCard>
            )
        }
    }

    // create a conditional that IF a user is logged in, render a message that must signout first or something
    render() {
        if (this.props.loggedIn === true) {
            return this.state.shouldRedirect ? (<Redirect to="/profile" />) : (
                <>
                    <h1 className="header">Login</h1>
                    <div>
                        {this.renderSuccessMessage()}
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <h1 className="header">Login</h1>
                    <div>
                        {/* {this.renderErrors()} */}
                    </div>
                    <LoginCard className="zoom">
                        <img src={"https://i.giphy.com/media/l0IxYD16t9PDEdg9q/giphy.webp"} alt={"Robert Redford"} />
                        <h3> </h3>
                        <form onSubmit={e => this.handleLogin(e)}>
                            <label style={{ color: "white" }}>Username: </label>
                            <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
                            <p> </p>
                            <label style={{ color: "white" }}>Password: </label>
                            <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
                            <p> </p>
                            <input type="submit" value="Login" />
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
    loggedIn: state.users.loggedIn
})

export default connect(mapStateToProps, { loginUser })(Login)