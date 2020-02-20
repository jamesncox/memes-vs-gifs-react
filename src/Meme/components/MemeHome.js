import React, { Component } from 'react'
import CaptionContainer from '../../Caption/components/CaptionContainer'
import MemeContainer from './MemeContainer'

class MemeHome extends Component {

    render() {
        return (
            <div>
                <h1 className="header">What Do You Meme?</h1>
                <MemeContainer />
                <CaptionContainer />
                <h4>Thank you for playing What Do You Meme?</h4>
            </div>
        )
    }
}

export default MemeHome