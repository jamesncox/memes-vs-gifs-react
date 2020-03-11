import React, { Component } from 'react'
import { MemeCard } from '../MemeStyles'

class CreateMeme extends Component {

    constructor(props) {
        super(props)
        this.state = {
            url: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSignup = e => {
        e.preventDefault()
        this.props.previewImage(this.state)
        this.setState({
            url: ''
        })
    }

    render() {
        return (
            <MemeCard>
                <form onSubmit={this.handlePreview.bind(this)}>
                    <input
                        type="text"
                        placeholder="Image url"
                        name="url"
                        value={this.state.url}
                        onChange={e => this.handleChange(e)}
                    />
                    <p> </p>
                    <input type="submit" value="Preview Image" />
                </form>
            </MemeCard>
        )
    }
}

export default CreateMeme