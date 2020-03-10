import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearCurrentUser } from '../actions/users'
import { getToken } from '../actions/sessions'

class Logout extends Component {

    componentDidMount() {
        this.props.clearCurrentUser()
        this.props.getToken()
    }

    render() {
        return (
            <>
                <h3> </h3>
                <img src={"https://media.giphy.com/media/8Bl38gdtUK7WDdi59y/giphy.gif"} alt={"Deadpool says goodbye"} />
                <h3> </h3>
                <h4> Thanks for visiting Memes vs Gifs. Please come back soon! </h4>
            </>
        )
    }
}

export default connect(null, { clearCurrentUser, getToken })(Logout) 