export default (state = [], action) => {
    switch (action.type) {
        case 'SET_MEMES':
            return action.memes
        default:
            return state
    }
}