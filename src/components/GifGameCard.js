import React from 'react'
import { GameLinkCard } from './Styles'

export default function GifGameCard(props) {

    return (
        <GameLinkCard onClick={props.handleNav} className="zoom">
            <h1>That's What You Gif!</h1>
            <img src={"https://media2.giphy.com/media/ne3xrYlWtQFtC/giphy.gif?cid=790b7611b5bae7bb18ab955cf5ef214ebfa9c3061efe6848&rid=giphy.gif"} alt={"Calculating"}></img>
        </GameLinkCard>
    )
}