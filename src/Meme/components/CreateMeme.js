import React, { Component } from 'react'
import { NewMemeForm } from '../MemeStyles'
import { connect } from 'react-redux'
import { PREVIEW_MEME } from '../../actionTypes'

class CreateMeme extends Component {

    constructor(props) {
        super(props)
        this.state = {
            url: '',
            id: Math.ceil(Math.random() * 10000)
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handlePreview = e => {
        e.preventDefault()
        this.props.previewImage(this.state)
        this.setState({
            url: '',
            id: Math.ceil(Math.random() * 1000)
        })
    }

    render() {
        return (
            <NewMemeForm>
                <form onSubmit={this.handlePreview.bind(this)}>
                    Paste in image url
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
            </NewMemeForm>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    previewImage: (previewMeme) => dispatch({ type: PREVIEW_MEME, payload: previewMeme })
})

export default connect(null, mapDispatchToProps)(CreateMeme)