const initialState = {
    allTrips: [],
    candidates: [],
    selectedTripId: ""
}

const trips = ( state = initialState, action) => {
    switch(action.type) {
        case "GET_ALL_TRIPS_ACTION" :
            return { ...state, allTrips: action.payload.trips}
        
        case "GET_TRIP_DETAIL_ACTION" :
            return { ...state, selectedTripId: action.payload.tripId}

        case "SET_CANDIDATES_ACTION" :
            console.log(action.payload.candidates)
            return { ...state, candidates: action.payload.candidates}

        default :
            return state;
    }
}

export default trips;