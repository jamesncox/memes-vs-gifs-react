import React, { Component } from "react"
import { MyForm } from './GiphyStyles'
import { connect } from 'react-redux'
import { getQueriedGifs } from './actions/gifs'
import { SET_QUERY_INPUT, CLEAR_CHOSEN_CAPTION } from './actionTypes'

class SearchBar extends Component {

    handleChange = e => {
        this.props.setQueryInput(e.target.value)
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.setQueryInput(this.props.query)
        this.props.getQueriedGifs()
        this.props.clearChosenCaption()
    }

    render() {
        return (
            <div>
                <h4>Type in a category to get a random gif</h4>
                <MyForm onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" placeholder="Category" onChange={this.handleChange} />
                    <input type="submit" value="Search" />
                </MyForm>
                <h1>{' '}</h1>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        setQueryInput: (text) => dispatch({ type: SET_QUERY_INPUT, payload: text }),
        getQueriedGifs: () => dispatch(getQueriedGifs()),
        clearChosenCaption: () => dispatch({ type: CLEAR_CHOSEN_CAPTION })
    })
}

const mapStateToProps = state => {
    return ({
        query: state.gifs.query
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)