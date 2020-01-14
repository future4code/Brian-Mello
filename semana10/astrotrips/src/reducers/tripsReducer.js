const initialState = {
    allTrips: [],
}

const trips = ( state = initialState, action) => {
    switch(action.type) {
        case "GET_ALL_TRIPS_ACTION" :
            return { ...state, allTrips: action.payload.trips}
        
        default :
            return state;
    }
}

export default trips;