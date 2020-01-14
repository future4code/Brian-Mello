import axios from 'axios';

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

