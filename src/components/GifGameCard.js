import React, { Component } from 'react'
import { GameLinkCard } from './Styles'
import { connect } from 'react-redux'

class GifGameCard extends Component {

    render() {
        if (this.props.loading) {
            return (
                <GameLinkCard>
                    <h3>Loading...</h3>
                    <img src={"https://i.giphy.com/media/3ov9k0BZQL358k458s/giphy.webp"} alt={"Loading..."} />
                </GameLinkCard>
            )
        } else {
            return (
                <GameLinkCard onClick={this.props.handleNav} className="zoom">
                    <h1>You Gif What You Gif!</h1>
                    <img style={{ width: "500px", height: "350px" }} src={"https://media2.giphy.com/media/ne3xrYlWtQFtC/giphy.gif?cid=790b7611b5bae7bb18ab955cf5ef214ebfa9c3061efe6848&rid=giphy.gif"} alt={"Calculating"}></img>
                </GameLinkCard>
            )
        }
    }
}

const mapStateToProps = state => ({
    loading: state.gifs.loading
})

export default connect(mapStateToProps)(GifGameCard)