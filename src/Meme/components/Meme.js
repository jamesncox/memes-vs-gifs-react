import React, { Component } from "react"
import { MemeCard } from "./MemeStyles"
import { connect } from 'react-redux'

class Meme extends Component {

    render() {
        return (
            <>
                <div className="zoom">
                    <MemeCard>
                        <img src={this.props.memesURL} alt={this.props.name} />
                        <h2>{this.props.chosenCaption}</h2>
                    </MemeCard>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    chosenCaption: state.captions.chosenCaption
})

export default connect(mapStateToProps)(Meme)