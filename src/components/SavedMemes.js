import React, { Component } from 'react'
import { SavedMemeCard } from './Styles'
import { connect } from 'react-redux'
import { getSavedMemes } from '../actions/memes'

class SavedMemes extends Component {

    //this action is async, so savedMemes does load, but always after displaySavedMemes() is called
    componentDidMount() {
        this.props.getSavedMemes()
    }

    // this is rendering undefined data because savecMemes load after this 
    displaySavedMemes() {
        console.log(this.props.state)
        return (
            <SavedMemeCard>

            </SavedMemeCard>
        )
    }

    render() {
        return (
            <div>
                <h1 className="header">Everyone's favorite memes</h1>
                {this.displaySavedMemes()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    savedMemes: state.savedMemes
})

export default connect(mapStateToProps, { getSavedMemes })(SavedMemes)