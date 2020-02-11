import React from "react"
import { Link } from 'react-router';
import { GameLinkCard } from './Styles'

export default function MemeGameCard(props) {

    return (
        <GameLinkCard className="zoom">
            <h1>What Do You Meme?</h1>
            <img src={"https://i.kym-cdn.com/photos/images/newsfeed/000/000/130/disaster-girl.jpg"}></img>
        </GameLinkCard>

    )
}