// this is my gif home page
// gif game card will have the link to call this class, which will render my Gif game

import React, { Component } from "react";
import GiphyContainer from './GiphyContainer'
import "./stylesheets/gif.css";
import CaptionContainer from './CaptionContainer'

class GiphyHome extends Component {

    render() {
        return (
            <div>
                <h1 className="header">That's What You Gif!</h1>
                <GiphyContainer />
                <CaptionContainer />
                <h4>Thank you for playing</h4>
            </div>
        )
    }
}

export default GiphyHome
