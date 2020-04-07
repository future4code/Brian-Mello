import axios from 'axios';
// import  { push } from 'connected-react-router'
// import { routes } from '../containers/Router';

const baseUrl = "https://vj4kbpy8c0.execute-api.us-east-1.amazonaws.com/v1"

const setVideoAction = (videos) => ({
    type: "SET_VIDEOS_ACTION",
    payload: {
        videos,
    }
})

export const getVideos = () => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/feed`)

        dispatch(setVideoAction(response.data.videos))
    } catch (err) {
        window.alert("Erro de renderização")
    }
}