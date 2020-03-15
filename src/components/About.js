import React, { Component } from 'react'
import { AboutCard, GuidelineCard } from './Styles'

class About extends Component {
    render() {
        return (
            <>
                <h1 className="header" style={{ width: "6in" }} >Information and Guidelines</h1>
                <AboutCard>
                    <p>Memes vs Gifs is created by James Cox, a recent graduate of Flatiron School.</p>
                    <GuidelineCard>
                        <p>Please create all the gifs and memes your heart desires!</p>
                        <p>You can upload images from the web, and create your own captions. Which is totally awesome. But there are some guidelines:</p>
                        <ul>
                            <p>Images must be suitable for work / office environments. (No nudity, violent images, propaganda, etc.)</p>
                            <p>"Naughty" words are allowed, but hateful or incendiary speech is not!</p>
                            <p></p>
                        </ul>
                        <p>If any images or captions violate these terms, they will be removed and the user associated with them will be deleted, with all their saved gifs and memes.</p>
                        <p>Enjoy the hell out of this app! But use it responsibly!</p>
                        <p>Ability to share your creations on social media coming soon...</p>
                    </GuidelineCard>
                    <p>I welcome feedback, ideas, criticism and reports of bugs or issues: jamesnathanielcox@gmail.com </p>
                </AboutCard>
            </>
        )
    }
}

export default About