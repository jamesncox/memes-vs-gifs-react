import React, { Component } from 'react'
import { CaptionForm, CaptionCard, SelectButton } from './CaptionStyles'
import { connect } from 'react-redux'
import { sendSavedCaption } from '../actions/captions'
import { PREVIEW_CAPTION, CLEAR_PREVIEW_CAPTION } from '../actionTypes'

class NewCaptionForm extends Component {
    state = {
        text: '',
        rating: 'PG'
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
            rating: 'PG'
        })

    }

    handlePreview = (e) => {
        e.preventDefault()

        const text = this.state.text
        const rating = this.state.rating
        const userId = this.props.user.id
        const captionObj = { text, rating, userId }
        this.props.previewCaption(captionObj)
    }

    editCaption = () => {
        return this.props.clearPreview()
    }

    renderCaptionPreview = () => {
        return (
            <CaptionCard>
                <SelectButton style={{ margin: "5px" }} onClick={this.handleSubmit}>Save</SelectButton>
                <SelectButton onClick={this.editCaption}>Edit</SelectButton>
                <h2>{this.props.captionPreview.text}</h2>
                <h3>Rating: {this.props.captionPreview.rating}</h3>
            </CaptionCard >
        )
    }

    render() {
        function isEmpty(obj) {
            for (let key in obj) {
                if (obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }

        if (isEmpty(this.props.captionPreview)) {
            return (
                <>
                    <CaptionForm className="big-zoom">
                        <form onSubmit={this.handlePreview.bind(this)}>
                            <br></br>
                            <textarea
                                placeholder="Create a hilarious caption!!"
                                name="text" value={this.state.text}
                                onChange={e => this.handleChange(e)}
                                rows="5"
                                cols="25"
                            />
                            <br></br>
                            <br></br>
                        Give your caption a PG or NSFW rating
                   <br></br>
                            <br></br>
                            <select id="selectedRating"
                                name="rating" value={this.state.rating}
                                onChange={e => this.handleChange(e)}>
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
        } else {
            return this.renderCaptionPreview()

        }
    }
}

const mapStateToProps = state => ({
    captionPreview: state.captions.captionPreview,
    user: state.users.user
})

const mapDispatchToProps = dispatch => ({
    previewCaption: (captionObj) => dispatch({ type: PREVIEW_CAPTION, payload: captionObj }),
    clearPreview: () => dispatch({ type: CLEAR_PREVIEW_CAPTION }),
    sendSavedCaption: (captionObj) => dispatch(sendSavedCaption(captionObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewCaptionForm)