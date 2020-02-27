import React, { Component } from 'react'
import { CaptionForm } from './CaptionStyles'
import { SET_CAPTION_INPUT } from '../actionTypes'
import { connect } from 'react-redux'

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
        console.log(this.state)
        this.props.setCaptionInput(this.state)
        this.setState({
            text: '',
            rating: 'PG'
        })

    }

    render() {
        return (
            <CaptionForm className="zoom">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <br></br>
                    <textarea placeholder="Create a hilarious caption!!" name="text" value={this.state.text} onChange={e => this.handleChange(e)} />
                    <br></br>
                    <br></br>
                    Give your caption a PG or R rating
                   <br></br>
                    <br></br>
                    <select id="selectedRating" name="rating" value={this.state.rating} onChange={e => this.handleChange(e)}>
                        <option value="PG">PG</option>
                        <option value="R">NSFW</option>
                    </select>
                    {' '}
                    <input type="submit" value="Create Caption" />
                    <br></br>
                    <br></br>
                </form>
            </CaptionForm>
        )
    }
}

const mapStateToProps = state => ({
    captionInput: state.captions.captionInput
})

const mapDispatchToProps = dispatch => ({
    setCaptionInput: (text) => dispatch({ type: SET_CAPTION_INPUT, payload: text })
})

export default connect(mapStateToProps, mapDispatchToProps)(NewCaptionForm)