import React, { Component } from 'react'
import { SavedMemeCard, SavedGifCard } from './UserStyles'

class UserProfile extends Component {

    displayUserGifs() {
        return (
            <>
                <h4>Your Saved Gifs</h4>
                <SavedGifCard>

                </SavedGifCard>
            </>
        )
    }

    displayUserMemes() {
        return (
            <>
                <h4>Your Saved Memes</h4>
                <SavedMemeCard>

                </SavedMemeCard>
            </>
        )
    }

    render() {
        return (
            <>
                <h1 className="header">Welcome [placeholder] </h1>
                {this.displayUserMemes()}
                {this.displayUserGifs()}
            </>
        )
    }
}

export default UserProfile