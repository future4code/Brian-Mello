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

const getTripDetailAction = (tripId) => ({
    type: "GET_TRIP_DETAIL_ACTION",
    payload: {
        tripId,
    }
})

export const getTrips = () => async (dispatch) => {
    const response = await axios.get (`${baseUrl}/trips`)

    dispatch(setTripsAction(response.data.trips))
}

export const getTripDetail = (tripId) => async (dispatch) => {
    const response = await axios.get (`${baseUrl}/trip/${tripId}`)

    dispatch(getTripDetailAction(response.data.tripId))
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

// export const applyToTrip = (name, age, applicationText, profession, country) => async (dispatch) => {

//     const Apply = {
//         name,
//         age,
//         applicationText,
//         profession,
//         country,
//     }

//     try {
//         const response = await axios.post (`${baseUrl}/${trips}/apply`, Apply)
//         window.alert("Aplicação feita com sucesso")
//     } catch (error) {
//         window.alert("erro na aplicação")
//     }
// }

