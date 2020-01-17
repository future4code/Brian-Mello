import axios from 'axios';
import  { push } from 'connected-react-router'
import { routes } from '../containers/Router';

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/futureX/brian"

const setTripsAction = (trips) => ({
    type: "GET_ALL_TRIPS_ACTION",
    payload: {
        trips,
    }
})

export const getTripDetailAction = (tripId) => ({
    type: "GET_TRIP_DETAIL_ACTION",
    payload: {
        tripId,
    }
})

export const setCandidatesAction = (candidates) => ({
    type: "SET_CANDIDATES_ACTION",
    payload: {
        candidates,
    }
})

export const decideCandidateAction = (candidateId) => ({
    type: "DECIDE_CANDIDATE_ACTION",
    payload: {
        candidateId,
    }
})

export const decideCandidates = (tripId, candidateId) => async (dispatch) => {

    const token = window.localStorage.getItem("token")

    const response = await axios.put (`${baseUrl}/trips/${tripId}/candidates/${candidateId}/decide`,{
        headers: {
            auth: token
        }
    })
}

export const getTrips = () => async (dispatch) => {
    const response = await axios.get (`${baseUrl}/trips`)

    dispatch(setTripsAction(response.data.trips))
}

export const getTripDetail = (tripId) => async (dispatch) => {

    const token = window.localStorage.getItem("token")
    
    const response = await axios.get (`${baseUrl}/trip/${tripId}`,{
        headers: {
            auth: token
        }
    })
    dispatch(setCandidatesAction(response.data.trip.candidates))
}

export const createTrip = (name, date, description, durationInDays, planet) => async (dispatch) => {

    const newTrip = {
        name,
        date,
        description,
        durationInDays,
        planet,
    }
    
    const token = window.localStorage.getItem("token")

    try {
        await axios.post (`${baseUrl}/trips`, newTrip,{
            headers: {
                auth: token
            }
        })
        window.alert("criado com sucesso")
        dispatch(getTrips())
        dispatch(push(routes.adminPage))
    } catch (error) {
        window.alert ("Erro na criação")
    }
}

export const login = (email, password) => async (dispatch) => {

    const login = {
        email,
        password,
    }

    try {
        const response = await axios.post (`${baseUrl}/login`, login)
        window.localStorage.setItem("token", response.data.token)
        dispatch(push(routes.adminPage))
    } catch (error) {
        window.alert("Usuário ou senha inválidos")
    }

}

export const applyToTrip = (name, age, applicationText, profession, country, tripId) => async (dispatch) => {

    const apply = {
        name,
        age,
        applicationText,
        profession,
        country,
    }

    try {
        await axios.post (`${baseUrl}/trips/${tripId}/apply`, apply)
        window.alert("Aplicação feita com sucesso")
        dispatch(push(routes.trip_list))
    } catch (error) {
        console.log(applyToTrip)
        window.alert("erro na aplicação")
    }
}

