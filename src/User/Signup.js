import React, { Component } from 'react'
import { LoginCard } from './UserStyles'
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

    componentDidUpdate(prevProps) {
        if (this.props.user && !prevProps.user) {
            this.setState({
                shouldRedirect: false
            })
        }
    }

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
        if (this.props.user.errors) {
            return <Errors errors={this.props.user.errors} />
        }
    }

    render() {
        return this.state.shouldRedirect ? (<Redirect to="/profile" />) : (
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
                <div>
                    {this.renderErrors()}
                </div>
            </>

        )
    }
}

const mapStateToProps = state => ({
    user: state.users.user,
    token: state.sessions.token
})

export default connect(mapStateToProps, { signupUser })(Signup)