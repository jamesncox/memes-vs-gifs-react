import React, { Component } from 'react'
import { CaptionCard } from './CaptionStyles'

class NewCaptionForm extends Component {

    render() {
        return (
            <CaptionCard className="zoom">
                <form>
                    <h3></h3>
                    <textarea placeholder="Create a hilarious caption!!" name="caption" />
                    <h3></h3>
                    Give your caption an appropriate rating.
                    <h3></h3>
                    <select id="selectedRating">
                        <option value="PG">PG</option>
                        <option value="R">NSFW</option>
                    </select>
                    {' '}
                    <input type="submit" value="Create Caption" />
                </form>
            </CaptionCard>
        )
    }
}

export default NewCaptionForm