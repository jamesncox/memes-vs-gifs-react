import React, { Component } from 'react'
import Meme from './Meme'
import GenerateMeme from './GenerateMeme'
import { connect } from 'react-redux'
import { getMemes, clearMeme } from '../../actions/memes'
import { clearCaptions } from '../../actions/captions'

class MemeContainer extends Component {

    componentWillUnmount() {
        this.props.clearMeme()
        this.props.clearCaptions()
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
    loading: state.memes.loading
})

export default connect(mapStateToProps, { getMemes, clearMeme, clearCaptions })(MemeContainer)