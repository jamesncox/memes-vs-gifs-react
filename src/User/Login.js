import React, { Component } from 'react'
import { LoginCard } from './UserStyles'

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = e => {
        e.preventDefault()
        this.setState({
            username: '',
            password: ''
        })
    }

    render() {
        return (
            <>
                <h1 className="header">Login</h1>
                <LoginCard className="zoom">
                    <img src={"https://i.giphy.com/media/l0IxYD16t9PDEdg9q/giphy.webp"} alt={"Robert Redford"} />
                    <h3> </h3>
                    <form onSubmit={e => this.handleLogin(e)}>
                        <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
                        {' '}
                        <input type="text" placeholder="Password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
                        {' '}
                        <input type="submit" value="Login" />
                    </form>
                </LoginCard>
            </>
        )
    }
}

export default Login