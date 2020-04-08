const initialState = {
    allVideos: []
}

const videos = (state = initialState, action) => {
    switch( action.type) {
        case "SET_VIDEOS_ACTION":
            return{ ...state, allVideos: action.payload.videos}
        default: 
        return state
    }
}

export default videos;