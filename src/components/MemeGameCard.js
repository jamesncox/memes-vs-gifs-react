import React, { Component } from 'react'
import { GameLinkCard } from './Styles'
import { connect } from 'react-redux'

class MemeGameCard extends Component {

    render() {
        if (this.props.loading) {
            return (
                <GameLinkCard>
                    <h3>Loading...</h3>
                    <img
                        src={"https://i.giphy.com/media/3ov9k0BZQL358k458s/giphy.webp"}
                        alt={"Loading..."}
                    />
                </GameLinkCard>
            )
        } else {
            return (
                <GameLinkCard onClick={this.props.handleNav} className="zoom">
                    <h1>That's What You Meme?</h1>
                    <img
                        style={{ width: "500px", height: "350px" }}
                        src={"https://i.kym-cdn.com/photos/images/newsfeed/000/000/130/disaster-girl.jpg"}
                        alt={"Girl Burning House"}>

                    </img>
                </GameLinkCard>
            )
        }
    }
}

const mapStateToProps = state => ({
    loading: state.gifs.loading
})

export default connect(mapStateToProps)(MemeGameCard)