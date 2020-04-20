// Função de cadastro
import axios from 'axios';
import  { push } from 'connected-react-router'
import { routes } from '../containers/Router';

const baseUrl = "https://vj4kbpy8c0.execute-api.us-east-1.amazonaws.com/v1"

// const baseUrl = "http://localhost:3003"
// Video Actions

export const setFeed = (feed) => ({
    type: "SET_FEED",
    payload: {
        feed,
    }
}) 

// pegar todos videos
export const getVideos = () => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/feed`)
        dispatch(setFeed(response.data.feed)); 
    } catch (err) {
        window.alert("Erro ao renderizar os vídeos!")
    }
           
}

export const setVideoId = (videoId) => ({
    type: "SET_VIDEO_ID",
    payload: {
        videoId
    }
})

// criar um video
export const createVideo = (title, link, description, photo) => async (dispatch) => {
   
    const newVideo = {
        title,
        link,
        description,
        photo
    }

    const accessToken = window.localStorage.getItem("accessToken")

    try{

        await axios.post(`${baseUrl}/createVideo`, newVideo, {
            headers: {
                Authorization: accessToken
            }
        })
        window.alert("Video Criado com sucesso!")
        dispatch(push(routes.home))
    } catch (err) {
        window.alert("Falha ao criar o Video")
        console.log(err)
    }
}

export const updateVideo = (videoId, title, description) => async (dispatch) => {

    const accessToken = window.localStorage.getItem("accessToken")

    const updateVideo = {
        title,
        description
    }

    try{

        await axios.post(`${baseUrl}/updateVideo/${videoId}`, updateVideo, {
            headers: {
                Authorization: accessToken
            }
        })
        window.alert("Video atualizado com sucesso!")
        dispatch(push(routes.videoDetail))
    } catch(err){
        window.alert("Não foi possível atualizar o vídeo!")
    }
}

// deletar um video
export const deleteVideo = (videoId) => async (dispatch) => {

    const accessToken = window.localStorage.getItem("accessToken")

    try {

        if(window.confirm("deseja mesmo deletar esse vídeo?")){
            await axios.delete(`${baseUrl}/deleteVideo/${videoId}`, {
                headers: {
                    Authorization: accessToken
                }
            })
            window.alert("Video deletado com sucesso!")
            dispatch(getVideos())
        }
        
    } catch (err) {
        window.alert("Você não pode deletar o video de outro usuário!")
    }
}

export const setVideoDetail = (videoDetail) => ({
    type: "SET_VIDEO_DETAIL",
    payload: {
        videoDetail
    }
})

// pegar detalhes de um video
export const getVideoDetails = (videoId) => async (dispatch) => {
    try{
        const response = await axios.get (`${baseUrl}/getVideoDetail/${videoId}`)
        dispatch(setVideoDetail(response.data.video))

    } catch (error) {
        window.alert("Falha ao renderizar os detalhes do vídeo!")
    }
}

// user actions

export const setUserId = (userId) => ({
    type: "SET_USER_ID",
    payload: {
        userId
    }
})

// Atualiza a senha do usuário logado.
export const updatePassword = (oldPassword, newPassword) => async (dispatch) => {
    
    const updatePassword = {
        oldPassword,
        newPassword
    }

    const accessToken = window.localStorage.getItem("accessToken")

    try{

        await axios.post(`${baseUrl}/user/updatePassword`, updatePassword, {
            headers: {
                Authorization: accessToken
            }
        })
        window.alert("Senha atualizada com sucesso!")
        dispatch(push(routes.profile))
        dispatch(getProfile())
    } catch(err){
        window.alert("Atualização de senha falhou!")
    }
}

// logar na conta
export const login = (email, password, device) => async (dispatch) => {

    const login = {
        email,
        password,
        device
    }

    try {
        const response = await axios.post(`${baseUrl}/login`, login)
            
        window.localStorage.setItem("accessToken", response.data.accessToken)
        dispatch(push(routes.home))
        window.alert("Usuário logado com sucesso!")
    } catch (error) {
        window.alert("Usuário ou senha inválidos")
    }
}

// criar uma nova conta
export const signup = (name, birthdate, email, password, type, photo) => async (dispatch) =>{
    const signUp = {
        name,
        birthdate,
        email,
        password,
        type,
        photo
    }

    try {
        const response = await axios.post(`${baseUrl}/signup`, signUp)
        window.localStorage.setItem("accessToken", response.data.accessToken)
        dispatch(push(routes.home))
        window.alert("Conta criada com sucesso")
    } catch (error) {
        window.alert("Conta existente")
    }  
}

export const setProfile = (User) => ({
    type: "SET_PROFILE",
    payload: {
        User
    }
})

// pega o perfil de um usuário
export const getProfile = () => async (dispatch) => {

    const accessToken = window.localStorage.getItem("accessToken")

    try{
        const response = await axios.get(`${baseUrl}/user`, {
            headers: {
                Authorization: accessToken
            }
        })

        dispatch(setProfile(response.data.User))
        
    } catch(err) {
        window.alert("Erro ao renderizar o perfil")
    }
}