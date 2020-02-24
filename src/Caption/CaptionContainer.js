import React, { Component } from 'react'
import GenerateCaption from './GenerateCaption'
import Caption from './Caption'
import { connect } from 'react-redux'
import { getCaptions } from '../actions/captions'

class CaptionContainer extends Component {

    async componentDidMount() {
        this.props.getCaptions()
    }

    renderRandomCaptions() {
        if (this.props.randomCaptions) {
            if (this.props.loading) {
                return (
                    <>
                        <h3>Loading captions...</h3>
                        <img src={"https://i.giphy.com/media/j37uIbtLm9atRzOtpR/giphy.webp"} alt={"Loading gifs..."} />
                    </>
                )
            } else {
                if (this.props.randomCaptions) {
                    return this.props.randomCaptions.map(c => {
                        return (
                            <Caption
                                text={c.text}
                                id={c.id}
                                key={c.id}
                                handleChooseCaption={this.props.handleChooseCaption}
                            />
                        )
                    })

                }
            }
        }
    }

    render() {
        return (
            <div>
                <GenerateCaption
                    handleSetRandomCaption={this.handleSetRandomCaption}
                />
                {this.renderRandomCaptions()}
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    randomCaptions: state.captions.randomCaptions,
    loading: state.captions.loading
})

export default connect(mapStateToProps, { getCaptions })(CaptionContainer)