import React from 'react'
import { GameLinkCard } from './Styles'

export default function GifGameCard(props) {

    return (
        // create a link to play That's What You Gif game
        <GameLinkCard className="zoom">
            <h1>That's What You Gif!</h1>
            <img src={"https://media2.giphy.com/media/ne3xrYlWtQFtC/giphy.gif?cid=790b7611b5bae7bb18ab955cf5ef214ebfa9c3061efe6848&rid=giphy.gif"}></img>
        </GameLinkCard>
    )
}