const initialState = {
    profile: {}
}

const users = ( state = initialState, action) => {
    switch(action.type){
        case "SET_PROFILE":
            return { ...state, profile: action.payload.User}

        default:
            return state
    }
}

export default users;