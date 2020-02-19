// aka app.js in codesandbox what-do-you-meme-classes
// this class will be called by my router/link to display Meme homepage

import React, { Component } from "react";
import NavBar from './NavBar'
import CaptionContainer from './CaptionContainer'
import MemeContainer from './MemeContainer'

import './stylesheets/meme.css'

class MemeHome extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <h1>What Do You Meme?</h1>
                <MemeContainer />
                <CaptionContainer />
            </div>
        )
    }
}

export default MemeHome