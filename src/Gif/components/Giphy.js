import React, { Component } from 'react'
import { GiphyCard } from './GiphyStyles'
import { connect } from 'react-redux'

class Giphy extends Component {

    render() {
        return (
            <>
                <div className="zoom">
                    <GiphyCard>
                        <img src={this.props.giphyURL} alt={this.props.name} />
                        <h2>{this.props.chosenCaption}</h2>
                    </GiphyCard>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    chosenCaption: state.captions.chosenCaption
})

export default connect(mapStateToProps)(Giphy)