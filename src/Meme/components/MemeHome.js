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
                <h4 style={{ width: "100%", backgroundColor: "rgba(0, 0, 0, 0.50)" }}>Thank you for playing What Do You Meme?</h4>
            </div >
        )
    }
}

export default MemeHome