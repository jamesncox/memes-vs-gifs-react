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
                <h4 style={{ width: "98%", backgroundColor: "rgba(0, 0, 0, 0.50)" }}>Memes Vs Gifs</h4>
            </div>
        )
    }
}

export default GiphyHome
