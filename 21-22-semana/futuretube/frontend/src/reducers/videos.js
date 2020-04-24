const initialState = {
    allVideos: [],
    selectedVideoId: "",
    selectedVideo: {}
}

const videos = (state = initialState, action) => {
    switch(action.type) {
        case "SET_FEED":
            return { ...state, allVideos: action.payload.feed}

        case "SET_VIDEO_ID":
            return { ...state, selectedVideoId: action.payload.videoId}
            
        case "SET_VIDEO_DETAIL":
            return { ...state, selectedVideo: action.payload.videoDetail}
        default: 
            return state
    }
}

export default videos;