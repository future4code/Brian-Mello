import axios from 'axios';

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bouman-brian"

export const setTaskDayAction = (task) => ({
    type: "SET_TASK_DAY_ACTION",
    payload: {
        task,
    }
})

export const getTasks = () => async (dispatch) => {

    const response = await axios.get(`${baseUrl}`)
        dispatch(setTaskDayAction(response.data))
}

export const createTask = (text, day) => async (dispatch) => {

    const newTask = {
        text,
        day
    }

    const response = await axios.post(`${baseUrl}`, newTask)
    
    if(response.status === 200) {

        dispatch(getTasks())
    }
}