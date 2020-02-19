import React, { Component } from "react"
import Meme from './Meme'
import GenerateMeme from './GenerateMeme'
import { connect } from 'react-redux'
import { getMemes } from '../actions/memes'

class MemeContainer extends Component {

    async componentDidMount() {
        this.props.getMemes()
    }

    renderRandomMeme = () => {
        if (this.props.randomMeme) {
            return (
                <Meme
                    key={this.props.randomMeme.id}
                    memesURL={this.props.randomMeme.url}
                />
            )
        }
    }

    render() {
        return (
            <div>
                <GenerateMeme />
                {this.renderRandomMeme()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    randomMeme: state.memes.randomMeme,
    chosenCaption: state.chosenCaption
})

export default connect(mapStateToProps, { getMemes })(MemeContainer)