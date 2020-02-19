import React from 'react'
import { NextBtn } from '../GiphyStyles'

export default function NextButton(props) {

    const handleClick = (e) => {
        e.preventDefault()
        props.handleClick(props)
    }

    return (
        <div>
            <NextBtn onClick={handleClick}>Next Giphy</NextBtn>
            <h1>{' '}</h1>
        </div>
    )
}