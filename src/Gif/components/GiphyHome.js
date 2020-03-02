import React, { Component } from 'react';
import GiphyContainer from './GiphyContainer'
import CaptionContainer from '../../Caption/CaptionContainer'

class GiphyHome extends Component {

    render() {
        return (
            <div>
                <h1 className="header">That's What You Gif!</h1>
                <GiphyContainer />
                <CaptionContainer />
            </div>
        )
    }
}

export default GiphyHome
