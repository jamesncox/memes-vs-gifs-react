import React, { Component } from 'react';
import GiphyContainer from './GiphyContainer'
import CaptionContainer from '../../Caption/components/CaptionContainer'

class GiphyHome extends Component {

    render() {
        return (
            <div>
                <h1 className="header">That's What You Gif!</h1>
                <GiphyContainer />
                <CaptionContainer />
                <h4>Thank you for playing That's What You Gif!</h4>
            </div>
        )
    }
}

export default GiphyHome
