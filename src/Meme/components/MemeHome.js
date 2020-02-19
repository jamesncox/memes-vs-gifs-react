import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import CaptionContainer from '../Caption/components/CaptionContainer'
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