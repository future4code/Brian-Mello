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

const choosePersonAction = (isMatch) => ({
	type: "CHOOSE_PERSON_ACTION",
	payload: {
		isMatch,
	}
})

export const getMatches = () => async (dispatch) => {
	const response = await axios.get(`${baseUrl}/matches`)

	dispatch(getMatchesAction(response.data.matches))
}

export const fetchProfileToSwipe = () => async (dispatch) => {
	const response = await axios.get (`${baseUrl}/person`)

	dispatch(setProfileToSwipe(response.data.profile))
}

export const choosePerson = () => async (dispatch) => {
	const response = await axios.post(`${baseUrl}/choose-person`)

	dispatch(choosePersonAction(response.data.isMatch))
}

export const clearSwipes = () => async (dispatch) => {
	await axios.put(`${baseUrl}/clear`)
}