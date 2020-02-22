import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQueriedGifs } from '../../actions/gifs'
import { SET_QUERY_INPUT, CLEAR_CHOSEN_CAPTION } from '../../actionTypes'

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
                <h4><form className="my-form" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" placeholder="Search a category" onChange={this.handleChange} />
                    <input type="submit" value="Find a Gif" />
                </form></h4>
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