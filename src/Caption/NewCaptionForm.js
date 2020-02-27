import React, { Component } from 'react'
import { CaptionCard } from './CaptionStyles'

class NewCaptionForm extends Component {

    render() {
        return (
            <CaptionCard className="zoom">
                <form>
                    {' '}
                    <textarea placeholder="Create a hilarious caption!!" name="caption" />
                    {' '}
                    Give your caption an appropriate rating.
                    {' '}
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