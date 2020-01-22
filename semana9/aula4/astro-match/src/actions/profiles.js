import axios from 'axios'

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/brian"

const setProfileToSwipe = (profile) => ({
	type: "SET_PROFILE_TO_SWIPE",
	payload: {
		profile,
	}
})

const getMatchesAction = (matches) => ({
	type: "GET_MATCHES_LIKED_BY_ME",
	payload: {
		matches,
	}
})

export const getMatches = () => async (dispatch) => {
	const response = await axios.get(`${baseUrl}/matches`)

	dispatch(getMatchesAction(response.data.matches))
}

export const getProfileToSwipe = () => async (dispatch) => {
	const response = await axios.get (`${baseUrl}/person`)

	dispatch(setProfileToSwipe(response.data.profile))
}

export const choosePerson = (id, choice) => async (dispatch) => {
	if (!id) {
		dispatch(getProfileToSwipe())
	}
	await axios.post(`${baseUrl}/choose-person`,{id, choice})

	dispatch(getProfileToSwipe())
}

export const clearSwipes = () => async (dispatch) => {
	await axios.put(`${baseUrl}/clear`)
}