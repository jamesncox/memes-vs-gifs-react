import React, { Component } from 'react';
import GiphyContainer from './GiphyContainer'
import '../../stylesheets/gif.css';
import CaptionContainer from '../../Caption/components/CaptionContainer'

class GiphyHome extends Component {

    render() {
        return (
            <div class="Gif">
                <h1>That's What You Gif!</h1>
                <GiphyContainer />
                <CaptionContainer />
                <h4>Thank you for playing</h4>
            </div>
        )
    }
}

export default GiphyHome
