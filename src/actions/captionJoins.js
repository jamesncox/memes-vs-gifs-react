import { DELETE_CAPTION_JOIN } from '../actionTypes'

export function deleteCaptionJoin(id) {
    console.log(id)
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/caption_joins/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(caption_join => dispatch({ type: DELETE_CAPTION_JOIN, payload: caption_join.id }))
    }
}