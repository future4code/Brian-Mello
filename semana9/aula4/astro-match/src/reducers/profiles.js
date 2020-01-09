const initialState = {
  currentProfile: null
}

const profiles = (state = initialState, action) => {
  switch(action.type) {
    case "SET_PROFILE_TO_SWIPE" :
      return { ...state, currentProfile: action.payload.profile}

    case "GET_MATCHES_LIKED_BY_ME" :


    case "CHOOSE_PERSON_ACTION" :


    default :
      return state;
  }
}
export default profiles
