import React, { Component } from 'react'
import CaptionContainer from '../../Caption/CaptionContainer'
import MemeContainer from './MemeContainer'

class MemeHome extends Component {

    render() {
        return (
            <div>
                <h1 className="header">What Do You Meme?</h1>
                <MemeContainer />
                <CaptionContainer />
            </div >
        )
    }
}

export default MemeHome