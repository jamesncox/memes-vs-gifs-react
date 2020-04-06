import React, { Component } from 'react'
import { AboutCard, GuidelineCard } from './Styles'

class About extends Component {
    render() {
        return (
            <>
                <h1 className="header" style={{ width: "6in" }} >Information and Guidelines</h1>
                <AboutCard>
                    <p>Memes vs Gifs is created by James Cox, a recent graduate of Flatiron School.</p>
                    <p>This app utilizes both the{' '}
                        <a
                            style={{ color: "rgb(11, 218, 114)" }}
                            href="https://developers.giphy.com/">
                            Giphy API
                        </a>
                        {' '}and{' '}
                        <a
                            style={{ color: "rgb(11, 218, 114)" }}
                            href="https://api.imgflip.com/">
                            ImgFlip API
                        </a>
                        .
                    </p>
                    <GuidelineCard>
                        <p>Please create all the gifs and memes your heart desires.</p>
                        <p>You can upload images from the web, and create your own captions. Which is totally awesome. But there are some guidelines:</p>
                        <ul>
                            <p>- Images must be suitable for work / office environments.</p>
                            <p>- "Naughty" words are allowed, but please keep the captions respectful.</p>
                            <p>- Caption cards must have a "PG" or "NSFW" rating. If my 7 year old daughter isn't allowed to read them, they're "NSFW"</p>
                            <p></p>
                        </ul>
                        <p>If any images or captions violate these terms, they will be removed and the user associated with them will be deleted, with all their saved gifs and memes.</p>
                        <p>Enjoy the hell out of this app. But use it responsibly.</p>
                        <p>Ability to share your creations on social media coming soon...</p>
                    </GuidelineCard>
                    <p>I welcome feedback, ideas, criticism and reports of bugs or issues: jamesnathanielcox@gmail.com </p>
                </AboutCard>
            </>
        )
    }
}

export default About