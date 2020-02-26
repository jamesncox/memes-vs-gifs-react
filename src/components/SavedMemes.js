import React, { Component } from 'react'
import { SavedMemeCard } from './Styles'
import { connect } from 'react-redux'
import { getSavedMemes } from '../actions/memes'
import Slider from './Slider'

class SavedMemes extends Component {

    render() {
        const savedMemeAndCaptionList = this.props.savedMemes.map(savedMeme => {
            return savedMeme.captions.map(caption => {
                return (
                    <SavedMemeCard className="saved-zoom" key={savedMeme.meme_id}>
                        <img src={savedMeme.meme_url} alt={savedMeme.id} />
                        <h2>{caption.text}</h2>
                    </SavedMemeCard>
                )
            })
        })

        if (this.props.loading) {
            return (
                <>
                    <h3>Loading memes...</h3>
                    <img src={"https://i.giphy.com/media/j37uIbtLm9atRzOtpR/giphy.webp"} alt={"Loading gifs..."} />
                </>
            )
        } else {
            return (
                <div className="parent">
                    <h1 className="header">Everyone's favorite memes</h1>
                    <Slider>
                        {savedMemeAndCaptionList}
                    </Slider>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return ({
        savedMemes: state.memes.savedMemes,
        loading: state.memes.loading
    })
}

export default connect(mapStateToProps, { getSavedMemes })(SavedMemes)



// return (
//     <div className="parent">
//      <Slider>
//       {data.map(value => {
//        return (
//         <div key={value} className="child">
//          {value}
//         </div>
//        );
//       })}
//      </Slider>
//     </div>
//    );
//   }
//  }