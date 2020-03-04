import React, { Component } from 'react'
import { CaptionForm } from './CaptionStyles'
import { connect } from 'react-redux'
import { sendSavedCaption } from '../actions/captions'

class NewCaptionForm extends Component {
    state = {
        text: '',
        rating: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const text = this.state.text
        const rating = this.state.rating
        const userId = this.props.user.id
        const captionObj = { text, rating, userId }
        this.props.sendSavedCaption(captionObj)
        this.setState({
            text: '',
            rating: ''
        })

    }

    render() {
        return (
            <>
                <CaptionForm className="big-zoom">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <br></br>
                        <textarea placeholder="Create a hilarious caption!!" name="text" value={this.state.text} onChange={e => this.handleChange(e)} />
                        <br></br>
                        <br></br>
                        Give your caption a PG or NSFW rating
                   <br></br>
                        <br></br>
                        <select id="selectedRating" name="rating" value={this.state.rating} onChange={e => this.handleChange(e)}>
                            <option value="">Select rating</option>
                            <option value="PG">PG</option>
                            <option value="R">NSFW</option>
                        </select>
                        {' '}
                        <input type="submit" value="Create Caption" />
                        <br></br>
                        <br></br>
                    </form>
                </CaptionForm>
            </>
        )
    }
}

const mapStateToProps = state => ({
    captionInput: state.captions.captionInput,
    user: state.users.user
})

export default connect(mapStateToProps, { sendSavedCaption })(NewCaptionForm)